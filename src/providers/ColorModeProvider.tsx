"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

/** FutureHax default is dark (black canvas + red brand), matching futurehax.com. */
export function ColorModeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
