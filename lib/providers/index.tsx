"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/lib/providers/queryProvider";
import { ReduxProvider } from "@/lib/providers/reduxProvider";
import { SignalRProvider } from "@/lib/providers/signalRProvider";

// Suppress React 19 warning for next-themes script tag
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const origError = console.error;
  console.error = (...args: any[]) => {
    if (typeof args[0] === 'string' && args[0].includes('Encountered a script tag')) {
      return;
    }
    origError.apply(console, args);
  };
}

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
