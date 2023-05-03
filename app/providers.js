"use client";

import { QueryClientProvider } from "@tanstack/react-query";

export function Providers({ children }) {
  return <QueryClientProvider>{children}</QueryClientProvider>;
}
