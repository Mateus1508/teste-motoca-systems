import { GoPlus } from "react-icons/go";
import { FiArrowUpCircle } from "react-icons/fi";
import Button from "../Button";
import Input from "../Input";
import SelectField from "../SelectField";
import styles from "./styles.module.css";
import { MotoType } from "../../types/moto";
import React from "react";
import { SelectChangeEvent } from "@mui/material";
import useInsert from "../../hooks/useInsert";
import useUpdate from "../../hooks/useUpdate";

interface Props {
  data?: MotoType;
}

const Form = ({ data }: Props) => {
  const [formData, setFormData] = React.useState<MotoType>({
    id: "",
    modelo: "",
    cor: "",
    valor: 0,
    status: 1,
  });

  React.useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<number>) => {
    const { name, value } = e.target;
    if (name === "valor") {
      setFormData({
        ...formData,
        [name]: Number(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const { insert, isInserting } = useInsert();
  const { update, isUpdating } = useUpdate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (data) {
        update(formData);
      } else {
        insert(formData);
      }
    } catch (error) {
      console.error("Ocorreu um erro ao submeter o formulário:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {data ? "Edite as informações que preferir! 📝" : "Preencha as informações a baixo para registrar uma Moto 🏍️"}
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          name="id"
          type="number"
          data-testid="Codigo"
          label="Código"
          icon="#"
          value={formData.id}
          onChange={handleChange}
          required
        />
        <Input
          name="modelo"
          data-testid="Modelo da Moto"
          label="Modelo da Moto"
          value={formData.modelo}
          onChange={handleChange}
          required
        />
        <Input name="cor" data-testid="Cor" label="Cor" value={formData.cor} onChange={handleChange} />
        <Input
          name="valor"
          type="number"
          data-testid="Valor"
          label="Valor"
          value={formData.valor.toString()}
          onChange={handleChange}
        />
        <SelectField
          name="status"
          data-testid="Status"
          label="Status"
          value={formData.status}
          onChange={handleChange}
        />
        <Button
          isPending={isInserting || isUpdating}
          type="submit"
          icon={data ? <FiArrowUpCircle size={24} /> : <GoPlus size={24} />}
          text={data ? "ATUALIZAR" : "REGISTRAR"}
        />
      </form>
    </div>
  );
};

export default Form;
