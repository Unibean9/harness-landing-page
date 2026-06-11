"use client";

import { useSignalRContext } from "@/lib/providers/signalRProvider";

export function useSignalR() {
  return useSignalRContext();
}
