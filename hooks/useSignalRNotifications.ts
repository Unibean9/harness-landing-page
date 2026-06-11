"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { useSignalR } from "@/hooks/useSignalR";

export function useSignalRNotifications(eventName = "ReceiveNotification") {
  const { connection } = useSignalR();

  useEffect(() => {
    if (!connection) return;

    const handler = (payload: { title?: string; message?: string }) => {
      toast.info(payload.title || "Thông báo mới", {
        description: payload.message,
      });
    };

    connection.on(eventName, handler);

    return () => {
      connection.off(eventName, handler);
    };
  }, [connection, eventName]);
}
