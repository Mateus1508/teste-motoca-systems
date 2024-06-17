import { useParams } from "react-router-dom";
import Form from "../../components/Form";
import styles from "./styles.module.css";
import { CircularProgress } from "@mui/material";
import { MotoService } from "../../services/moto";
import { useQuery } from "@tanstack/react-query";
import { MotoType } from "../../types/moto";
const AddOrEditMoto = () => {
  const { id } = useParams();

  const {
    data: moto,
    isLoading,
    isError,
  } = useQuery<MotoType>({
    queryKey: ["moto", id],
    queryFn: () => MotoService.getById(id),
    enabled: !!id,
  });

  if (id) {
    if (isLoading) return <CircularProgress />;
    if (isError || !moto) return <div>Ocorreu um erro ao carregar os detalhes da moto.</div>;
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{id ? "Editor" : "Registros de motos"}</h1>
      <hr />
      <Form data={moto} />
    </div>
  );
};

export default AddOrEditMoto;
