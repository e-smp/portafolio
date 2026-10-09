import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-background px-2 py-0.5 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
