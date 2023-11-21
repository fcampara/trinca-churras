import { HTMLAttributes, ReactNode } from "react";

export interface IconDetailProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  text: ReactNode;
}
