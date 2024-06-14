import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface Props {
  type?: string;
  name?: string;
  value?: number;
  onChange?: (e: SelectChangeEvent<number>) => void;
  label?: string;
}

const SelectField = (props: Props) => {
  return (
    <FormControl size="small" fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <Select value={props.value} label={props.label} onChange={props.onChange}>
        <MenuItem value={1}>Em estoque</MenuItem>
        <MenuItem value={2}>Sem estoque</MenuItem>
        <MenuItem value={3}>Em trânsito</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectField;
