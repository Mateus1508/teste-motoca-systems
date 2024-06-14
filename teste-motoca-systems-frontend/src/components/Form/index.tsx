import { GoPlus } from "react-icons/go";
import Button from "../Button";
import Input from "../Input";
import SelectField from "../Select";
import styles from "./styles.module.css";
const Form = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Preencha as informações a baixo para registrar uma Moto 🏍️</h2>
      <form className={styles.form} action="">
        <Input name="codigo" label="Código" icon="#" />
        <Input name="modelo" label="Modelo da Moto" />
        <Input name="cor" label="Cor" />
        <Input name="valor" label="Valor" />
        <SelectField name="status" label="Status" />
        <Button icon={<GoPlus size={24} />} text="REGISTRAR" />
      </form>
    </div>
  );
};

export default Form;
