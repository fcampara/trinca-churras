import "@/components/Checkbox/checkbox.styles.scss"
import { FC } from "react";
import { ChecboxProps } from "./Checkbox.types";

const Checkbox: FC<ChecboxProps> = (props) => {
  const { label } = props;
  return (
    <label className="tri-checkbox">
      <input type="checkbox" />
      {label}
    </label>
  );
}

export default Checkbox;
