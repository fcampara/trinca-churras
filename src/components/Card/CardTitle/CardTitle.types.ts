import { HTMLAttributes } from "react"

type CardTitleLevel = 1 | 2

export interface CardTitleProps extends HTMLAttributes<HTMLSpanElement> {
  level?: CardTitleLevel
}
