import { HTMLAttributes, ReactNode } from "react";

export interface CardIconProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  text: ReactNode;
}
