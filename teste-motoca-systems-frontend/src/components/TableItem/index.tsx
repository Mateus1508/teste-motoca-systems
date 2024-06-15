import { BiTrashAlt } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import styles from "./styles.module.css";
import VehicleStatus from "../VehicleStatus";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { MotoType } from "../../types/moto";
import { MotoService } from "../../services/moto";
import { CircularProgress } from "@mui/material";
import { formatValueToCurrency } from "../../utils/formatToCurrency";
import { useNavigate } from "react-router-dom";
import React from "react";

interface Props {
  search: string;
}

const TableItem = ({ search }: Props) => {
  const queryClient = new QueryClient();
  const navigate = useNavigate();
  const [deleteInProgress, setDeleteInProgress] = React.useState<string | null>(null);

  const {
    data: motos,
    isLoading,
    isError,
    refetch,
  } = useQuery<MotoType[], Error>({
    queryKey: ["motos"],
    queryFn: () => MotoService.getAll(),
  });

  const { mutate } = useMutation({
    mutationFn: async (id: string) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return MotoService.delete(id);
    },
    onSuccess: () => {
      setDeleteInProgress(null);
      queryClient.invalidateQueries({ queryKey: ["motos"] });
      refetch();
    },
  });

  if (isLoading) {
    return (
      <div className={styles.loadingTableItems}>
        <CircularProgress color="secondary" />
      </div>
    );
  }

  if (isError) {
    return <div>Ocorreu um erro ao carregar as motos.</div>;
  }

  const filteredMotos = motos?.filter(
    (moto) =>
      moto.modelo.toLowerCase().includes(search.toLowerCase()) ||
      moto.cor.toLowerCase().includes(search.toLowerCase()) ||
      moto.id.toLowerCase().includes(search.toLowerCase()),
  );

  const handleDelete = (id: string) => {
    try {
      setDeleteInProgress(id);
      mutate(id);
    } catch (error) {
      window.alert("Erro ao remover a moto:");
    }
  };

  const handleEditMoto = (id: string) => {
    navigate(`/add-moto/${id}`);
  };

  return (
    <div>
      <table className={styles.tableContainer}>
        <tbody className={styles.tableBody}>
          {filteredMotos?.map((moto) => (
            <tr key={moto.id} className={styles.tableRow}>
              <td>#{moto.id}</td>
              <td>
                <h3>
                  {moto.modelo} <VehicleStatus status={moto.status} />
                </h3>
                <p>Valor: {formatValueToCurrency(moto.valor)}</p>
                <p>Cor: {moto.cor}</p>
              </td>
              <td>
                <button onClick={() => handleDelete(moto.id)} disabled={deleteInProgress === moto.id ?? true}>
                  {deleteInProgress === moto.id ? (
                    <CircularProgress size={24} style={{ color: "red" }} />
                  ) : (
                    <BiTrashAlt color="red" size={24} />
                  )}
                </button>
                <button onClick={() => handleEditMoto(moto.id)}>
                  <IoEyeOutline size={24} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableItem;
