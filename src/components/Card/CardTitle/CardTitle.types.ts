import { HTMLAttributes } from "react"

type CardTitleLevel = 1 | 2
type CardTitleColor = "light"
export interface CardTitleProps extends HTMLAttributes<HTMLSpanElement> {
  level?: CardTitleLevel
  color?: CardTitleColor
}
