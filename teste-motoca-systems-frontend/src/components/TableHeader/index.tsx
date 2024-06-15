import Button from "../Button";
import { GoPlus } from "react-icons/go";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

interface Props {
  handleSearch: (value: string) => void;
}

const TableHeader = ({ handleSearch }: Props) => {
  const navigate = useNavigate();

  function handleRedirectToAddMoto() {
    navigate("/add-moto");
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tabela de Motos</h1>
      <div className={styles.actions}>
        <div className={styles.searchBox}>
          <IoSearch size={18} />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Buscar por código, nome e cor"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <Button onClick={handleRedirectToAddMoto} icon={<GoPlus size={24} />} text="NOVO REGISTRO" />
      </div>
    </div>
  );
};

export default TableHeader;
