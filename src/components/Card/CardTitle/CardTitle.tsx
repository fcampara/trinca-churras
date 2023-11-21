import { CardTitleProps } from "./CardTitle.types";
import clsx from "clsx";
import "@/components/Card/CardTitle/CardTitle.scss";
import { FC } from "react";

const CardTitle: FC<CardTitleProps> = (props) => {
  const { level = 2, children, className, color, ...restProps } = props;

  return <span className={clsx(className, "card-title", {
    [`card-title__level-${level}`]: true,
    [`card-title__color-${color}`]: true
  })}{...restProps}>{children}</span>;
};

export default CardTitle;
