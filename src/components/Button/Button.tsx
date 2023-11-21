import { FC } from "react";
import { ButtonProps } from "@/components/Button/button.types";
import "@/components/Button/button.styles.scss";
import clsx from "clsx";

const Button: FC<ButtonProps> = (props) => {
  const { type = "button", fullWidth, className, ...restProps } = props;
  return (
    <button
      className={clsx("tri-button", className, {
        ["tri-button--full-width"]: fullWidth,
      })}
      type={type}
      {...restProps}
    />
  );
};

export default Button;
