import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { deleteCookie, setCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { fetchAuth, type LoginRequest } from "@/lib/api/services/fetchAuth";
import type { AppDispatch, RootState } from "@/lib/redux/store";
import type { DecodedToken, User } from "@/types/models";
import { getAuthCookieConfig } from "@/utils/cookieConfig";

interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null,
  isAuthenticated: false,
  isLoading: false,
};

let refreshTimer: ReturnType<typeof setTimeout> | null = null;

function parseUserFromToken(token: string): User | null {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return {
      id: decoded.id,
      email: decoded.email,
      userName: decoded.userName,
      role: Array.isArray(decoded.role) ? decoded.role : [],
      avatarUrl: decoded.avatarUrl,
    };
  } catch {
    return null;
  }
}

export const loginAsync = createAsyncThunk("auth/login", async (payload: LoginRequest) => {
  const response = await fetchAuth.login(payload);

  return {
    accessToken: response.data.accessToken,
    refreshToken: response.data.refreshToken,
  };
});

export const logoutAsync = createAsyncThunk("auth/logout", async () => {
  await fetchAuth.logout();
});

export function clearRefreshTimer() {
  if (refreshTimer) {
    clearTimeout(refreshTimer);
    refreshTimer = null;
  }
}

export function setupAutoRefresh(token: string, dispatch: AppDispatch) {
  clearRefreshTimer();

  try {
    const decoded = jwtDecode<DecodedToken>(token);
    if (!decoded.exp) return;

    const expiresAt = decoded.exp * 1000;
    const refreshAt = Math.max(expiresAt - Date.now() - 120000, 0);

    refreshTimer = setTimeout(() => {
      dispatch(logout());
    }, refreshAt);
  } catch {
    clearRefreshTimer();
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokenWithRefresh: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = parseUserFromToken(action.payload.accessToken);
      state.isAuthenticated = Boolean(state.token && state.user);
    },
    hydrateAuthFromToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
      state.user = action.payload ? parseUserFromToken(action.payload) : null;
      state.isAuthenticated = Boolean(state.token && state.user);
    },
    logout: (state) => {
      clearRefreshTimer();
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      deleteCookie("authToken", { path: "/" });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.user = parseUserFromToken(action.payload.accessToken);
        state.isAuthenticated = Boolean(state.token && state.user);
        setCookie("authToken", action.payload.accessToken, getAuthCookieConfig());
      })
      .addCase(loginAsync.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.refreshToken = null;
        state.isAuthenticated = false;
        deleteCookie("authToken", { path: "/" });
      });
  },
});

export const { setTokenWithRefresh, hydrateAuthFromToken, logout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
