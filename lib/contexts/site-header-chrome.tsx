"use client";

import { createContext, useContext } from "react";
import { useSiteHeaderHidden } from "@/lib/hooks/use-site-header-hidden";

const SiteHeaderChromeContext = createContext<boolean | undefined>(undefined);

export function SiteHeaderChromeProvider({
  children,
  hideDisabled = false,
}: {
  children: React.ReactNode;
  hideDisabled?: boolean;
}) {
  const hidden = useSiteHeaderHidden({ disabled: hideDisabled });

  return (
    <SiteHeaderChromeContext.Provider value={hidden}>{children}</SiteHeaderChromeContext.Provider>
  );
}

export function useSiteHeaderChromeHidden(fallbackDisabled = false) {
  const fromContext = useContext(SiteHeaderChromeContext);
  const localHidden = useSiteHeaderHidden({
    disabled: fallbackDisabled || fromContext !== undefined,
  });

  return fromContext !== undefined ? fromContext : localHidden;
}
