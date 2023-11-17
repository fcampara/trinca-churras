import { FC } from "react"
import { ButtonProps } from "@/app/components/Button/button.types"
import styles from "@/app/components/Button/button.module.scss"

const Button: FC<ButtonProps> = (props) => {
  const { type = "button", ...restProps } = props;
  return <button className={styles["tri-button"]} type={type} {...restProps} />;
}

export default Button
