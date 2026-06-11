"use client";

import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  loginAsync,
  logout,
  logoutAsync,
  selectAuth,
  selectUser,
  setupAutoRefresh,
} from "@/lib/redux/slices/authSlice";
import { ROLE_ADMIN, ROLE_INSTRUCTOR, ROLE_STUDENT } from "@/lib/types/roles";

export function useAuth() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const auth = useAppSelector(selectAuth);
  const user = useAppSelector(selectUser);

  const roles = user?.role ?? [];

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const result = await dispatch(loginAsync(credentials)).unwrap();
      setupAutoRefresh(result.accessToken, dispatch);

      toast.success("Đăng nhập thành công");

      const decoded = jwtDecode<{ role?: string | string[] }>(result.accessToken);
      const nextRoles = Array.isArray(decoded.role)
        ? decoded.role
        : decoded.role
          ? [decoded.role]
          : [];
      if (nextRoles.includes(ROLE_ADMIN)) router.push("/admin/dashboard");
      else if (nextRoles.includes(ROLE_INSTRUCTOR)) router.push("/instructor/dashboard");
      else router.push("/courses");

      return result;
    } catch (error) {
      toast.error("Đăng nhập thất bại");
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await dispatch(logoutAsync()).unwrap();
    } catch {
      dispatch(logout());
    } finally {
      toast.success("Đăng xuất thành công");
      router.push("/login");
    }
  };

  return {
    ...auth,
    user,
    roles,
    isAdmin: roles.includes(ROLE_ADMIN),
    isInstructor: roles.includes(ROLE_INSTRUCTOR),
    isStudent: roles.includes(ROLE_STUDENT),
    login,
    logout: signOut,
  };
}
