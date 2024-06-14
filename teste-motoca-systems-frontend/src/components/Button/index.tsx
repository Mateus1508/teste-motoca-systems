import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  icon?: ReactNode;
  text: string;
  onClick?: () => void;
}

const Button = (props: Props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
