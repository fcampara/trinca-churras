import { FC } from "react";
import styles from '@/components/Input/input.module.scss'
import { InputProps } from "@/components/Input/input.types";

const Input: FC<InputProps> = (props) => {
  const { label, ...restProps } = props;

  return (
      <label className={styles["tr-input__label"]} >
        {label}
        <input {...restProps} className={styles["tr-input"]} />
      </label>
  );
};
export default Input;
