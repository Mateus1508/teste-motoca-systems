import { GoPlus } from "react-icons/go";
import { FiArrowUpCircle } from "react-icons/fi";
import Button from "../Button";
import Input from "../Input";
import SelectField from "../SelectField";
import styles from "./styles.module.css";
import { MotoType } from "../../types/moto";
import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { MotoService } from "../../services/moto";
import { useNavigate } from "react-router-dom";

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

  const navigation = useNavigate();

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

  const queryClient = new QueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData: MotoType) => {
      if (data) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return MotoService.update(formData.id, formData);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return MotoService.insert(formData);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["motos"] });
      navigation("/");
    },
    onError: () => {
      window.alert("Ocorreu um erro:");
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      mutate(formData);
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
        <Input name="id" type="number" label="Código" icon="#" value={formData.id} onChange={handleChange} />
        <Input name="modelo" label="Modelo da Moto" value={formData.modelo} onChange={handleChange} />
        <Input name="cor" label="Cor" value={formData.cor} onChange={handleChange} />
        <Input name="valor" type="number" label="Valor" value={formData.valor.toString()} onChange={handleChange} />
        <SelectField name="status" label="Status" value={formData.status} onChange={handleChange} />
        <Button
          isPending={isPending}
          type="submit"
          icon={data ? <FiArrowUpCircle size={24} /> : <GoPlus size={24} />}
          text={data ? "ATUALIZAR" : "REGISTRAR"}
        />
      </form>
    </div>
  );
};

export default Form;
