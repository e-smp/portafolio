import type { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200";

const variants = {
  primary: "bg-accent text-accent-foreground hover:opacity-90",
  secondary: "border border-border bg-card hover:border-accent hover:text-accent",
};

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonProps) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
