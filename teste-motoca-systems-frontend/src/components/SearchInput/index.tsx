import { IoSearch } from "react-icons/io5";
import styles from "./styles.module.css";

const SearchInput = () => {
  return (
    <div className={styles.searchBox}>
      <IoSearch size={18} />
      <input className={styles.searchInput} type="text" placeholder="Buscar por código, nome e cor" />
    </div>
  );
};

export default SearchInput;
