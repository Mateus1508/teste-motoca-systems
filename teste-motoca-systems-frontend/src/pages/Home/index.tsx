import TableHeader from "../../components/TableHeader";
import TableItem from "../../components/TableItem";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <TableHeader />
      <hr />
      <TableItem />
    </div>
  );
};

export default Home;
