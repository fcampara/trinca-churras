import "@/components/Card/CardIcon/CardIcon.styles.scss"
import { FC } from "react";
import { CardIconProps } from "@/components/Card/CardIcon/CardIcon.types";
import Image from "next/image";
import clsx from "clsx";

const CardIcon: FC<CardIconProps> = (props) => {
  const { alt, src, text, className, ...restProps } = props;

  return (
    <div className={clsx("card-icon__detail", className)} {...restProps}>
      <Image src={src} alt={alt} />
      {text}
    </div>
  );
};

export default CardIcon;
