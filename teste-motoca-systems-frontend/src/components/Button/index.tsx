import { ReactNode } from "react";
import styles from "./styles.module.css";
import { CircularProgress } from "@mui/material";

interface Props {
  icon?: ReactNode;
  text: string;
  type?: "submit";
  isPending?: boolean;
  onClick?: () => void;
}

const Button = (props: Props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.isPending ? (
        <CircularProgress size={24} color="inherit" />
      ) : (
        <>
          {props.icon}

          {props.text}
        </>
      )}
    </button>
  );
};

export default Button;
