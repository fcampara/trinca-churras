type CardColor = "white" | "gray"
export type CardElement = "div" | "form";
export type CardProps<T extends CardElement = "div"> = {
  color?: CardColor
  tag?: keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements[T]
