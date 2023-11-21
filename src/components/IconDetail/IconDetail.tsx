import "@/components/IconDetail/IconDetail.styles.scss"
import { FC } from "react";
import { IconDetailProps } from "@/components/IconDetail/IconDetail.types";
import Image from "next/image";
import clsx from "clsx";

const IconDetail: FC<IconDetailProps> = (props) => {
  const { alt, src, text, className, ...restProps } = props;

  return (
    <div className={clsx("icon-detail", className)} {...restProps}>
      <Image src={src} alt={alt} />
      {text}
    </div>
  );
};

export default IconDetail;
