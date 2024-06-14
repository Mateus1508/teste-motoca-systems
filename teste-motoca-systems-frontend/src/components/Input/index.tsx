import React from "react";
import { InputAdornment, TextField } from "@mui/material";

interface Props {
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  icon?: string | React.ReactNode;
}

const Input = (props: Props) => {
  return (
    <TextField
      type={props.type ? props.type : "text"}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      label={props.label}
      variant="outlined"
      size="small"
      InputProps={{
        startAdornment: <InputAdornment position="start">{props.icon}</InputAdornment>,
      }}
      fullWidth
    />
  );
};

export default Input;
