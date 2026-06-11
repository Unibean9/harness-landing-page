/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from "axios";
import { deleteCookie, setCookie } from "cookies-next";
import { logout, setTokenWithRefresh } from "@/lib/redux/slices/authSlice";
import { store } from "@/lib/redux/store";
import type { ApiError } from "@/types/api";
import { getAuthCookieConfig } from "@/utils/cookieConfig";

class ApiService {
  private client: AxiosInstance;
  private isRefreshing = false;
  private failedQueue: Array<{
    resolve: (token: string) => void;
    reject: (error: unknown) => void;
  }> = [];

  constructor(baseURL: string, timeout = 60000) {
    this.client = axios.create({
      baseURL,
      timeout,
      headers: { "Content-Type": "application/json" },
    });

    this.setupInterceptors();
  }

  private processQueue(error: unknown, token: string | null = null) {
    this.failedQueue.forEach((promise) => {
      if (error) promise.reject(error);
      else if (token) promise.resolve(token);
    });
    this.failedQueue = [];
  }

  private setupInterceptors() {
    this.client.interceptors.request.use(
      (config) => {
        const token = store.getState().auth.token;

        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        if (config.data instanceof FormData && config.headers) {
          delete config.headers["Content-Type"];
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

        if (error.response?.status === 401 && !originalRequest?._retry) {
          if (this.isRefreshing) {
            return new Promise((resolve, reject) => {
              this.failedQueue.push({
                resolve: (token) => resolve(this.client({ ...originalRequest, headers: { ...originalRequest.headers, Authorization: `Bearer ${token}` } })),
                reject,
              });
            });
          }

          originalRequest._retry = true;
          this.isRefreshing = true;

          try {
            const refreshToken = store.getState().auth.refreshToken;
            if (!refreshToken) throw new Error("Missing refresh token");

            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}api/v1/auth/refresh-token`,
              { refreshToken },
              { headers: { "Content-Type": "application/json" } }
            );

            const accessToken = response.data?.data?.accessToken as string | undefined;
            const nextRefreshToken =
              (response.data?.data?.refreshToken as string | undefined) ?? refreshToken;

            if (!accessToken) throw new Error("Invalid refresh response");

            store.dispatch(setTokenWithRefresh({ accessToken, refreshToken: nextRefreshToken }));
            setCookie("authToken", accessToken, getAuthCookieConfig());

            this.processQueue(null, accessToken);
            this.isRefreshing = false;

            return this.client({
              ...originalRequest,
              headers: {
                ...originalRequest.headers,
                Authorization: `Bearer ${accessToken}`,
              },
            });
          } catch (refreshError) {
            this.isRefreshing = false;
            this.processQueue(refreshError, null);
            deleteCookie("authToken", { path: "/" });
            store.dispatch(logout());

            return Promise.reject({
              code: 401,
              message: "Session expired. Please login again.",
              status: false,
            } satisfies ApiError);
          }
        }

        return Promise.reject({
          code: error.response?.status,
          message: error.response?.data?.message || error.message || "Có lỗi xảy ra",
          status: false,
          data: error.response?.data,
        } satisfies ApiError);
      }
    );
  }

  async request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.request<T>(config);
  }

  async get<T>(url: string, params?: Record<string, any>): Promise<AxiosResponse<T>> {
    return this.request<T>({ method: "GET", url, params });
  }

  async post<T, D = any>(url: string, data?: D): Promise<AxiosResponse<T>> {
    return this.request<T>({ method: "POST", url, data });
  }

  async put<T, D = any>(url: string, data?: D): Promise<AxiosResponse<T>> {
    return this.request<T>({ method: "PUT", url, data });
  }

  async patch<T, D = any>(url: string, data?: D): Promise<AxiosResponse<T>> {
    return this.request<T>({ method: "PATCH", url, data });
  }

  async delete<T>(url: string): Promise<AxiosResponse<T>> {
    return this.request<T>({ method: "DELETE", url });
  }
}

const apiService = new ApiService(process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/");

export default apiService;
