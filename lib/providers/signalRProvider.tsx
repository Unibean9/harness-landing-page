"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { HubConnection } from "@microsoft/signalr";
import { startSignalRConnection, stopSignalRConnection } from "@/lib/realtime/signalr";
import { useAppSelector } from "@/lib/redux/hooks";

interface SignalRContextValue {
  connection: HubConnection | null;
}

const SignalRContext = createContext<SignalRContextValue>({ connection: null });

export function SignalRProvider({ children }: { children: React.ReactNode }) {
  const token = useAppSelector((state) => state.auth.token);
  const [connection, setConnection] = useState<HubConnection | null>(null);

  useEffect(() => {
    if (!token) {
      void stopSignalRConnection();
      return;
    }

    let isMounted = true;

    void startSignalRConnection(token)
      .then((conn) => {
        if (isMounted) setConnection(conn);
      })
      .catch(() => {
        if (isMounted) setConnection(null);
      });

    return () => {
      isMounted = false;
    };
  }, [token]);

  const value = useMemo(() => ({ connection: token ? connection : null }), [connection, token]);

  return <SignalRContext.Provider value={value}>{children}</SignalRContext.Provider>;
}

export function useSignalRContext() {
  return useContext(SignalRContext);
}
