"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { SiteHeaderChromeProvider } from "@/lib/contexts/site-header-chrome";

interface PrinciplesChromeContextValue {
  setMobilePanelOpen: (open: boolean) => void;
}

const PrinciplesChromeContext = createContext<PrinciplesChromeContextValue | null>(null);

export function usePrinciplesChrome() {
  return useContext(PrinciplesChromeContext);
}

export function PrinciplesChromeRoot({ children }: { children: React.ReactNode }) {
  const [mobilePanelOpen, setMobilePanelOpen] = useState(false);

  const chromeValue = useMemo(
    () => ({
      setMobilePanelOpen,
    }),
    []
  );

  return (
    <SiteHeaderChromeProvider hideDisabled={mobilePanelOpen}>
      <PrinciplesChromeContext.Provider value={chromeValue}>
        {children}
      </PrinciplesChromeContext.Provider>
    </SiteHeaderChromeProvider>
  );
}
