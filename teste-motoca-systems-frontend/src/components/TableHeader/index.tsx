import Button from "../Button";
import SearchInput from "../SearchInput";
import { GoPlus } from "react-icons/go";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const TableHeader = () => {
  const navigate = useNavigate();

  function handleRedirectToAddMoto() {
    navigate("/add-moto");
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tabela de Motos</h1>
      <div className={styles.actions}>
        <SearchInput />
        <Button onClick={handleRedirectToAddMoto} icon={<GoPlus size={24} />} text="NOVO REGISTRO" />
      </div>
    </div>
  );
};

export default TableHeader;
