"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/lib/providers/queryProvider";
import { ReduxProvider } from "@/lib/providers/reduxProvider";
import { SignalRProvider } from "@/lib/providers/signalRProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <QueryProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SignalRProvider>{children}</SignalRProvider>
          <Toaster position="bottom-center" richColors closeButton />
        </ThemeProvider>
      </QueryProvider>
    </ReduxProvider>
  );
}
