import { CardElement, CardProps } from "./Card.types";
import clsx from "clsx";
import "@/components/Card/Card.scss";
import { createElement } from "react";

const Card = <T extends CardElement = "div">(props: CardProps<T>) => {
  const {
    color = "white",
    tag = "div",
    className,
    children,
    ...restProps
  } = props;

  const Wrapper = createElement(
    tag,
    {
      className: clsx("card", className, {
        [`card--${color}`]: true,
      }),
      ...restProps,
    },
    children
  );

  return Wrapper;
};

export default Card;
