import type { HTMLAttributes } from "react";

export type CardProps = HTMLAttributes<HTMLElement>;

export function Card({ children, ...props }: CardProps) {
  return <section {...props}>{children}</section>;
}
