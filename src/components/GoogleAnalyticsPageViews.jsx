"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function GoogleAnalyticsPageViews() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", { page_path: pathname });
  }, [pathname]);

  return null;
}
