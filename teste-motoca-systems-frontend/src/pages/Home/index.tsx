import React from "react";
import TableHeader from "../../components/TableHeader";
import TableItem from "../../components/TableItem";
import styles from "./styles.module.css";

const Home = () => {
  const [search, setSearch] = React.useState("");

  const handleSearch = (value: string) => {
    setSearch(value);
  };
  return (
    <div className={styles.container}>
      <TableHeader handleSearch={handleSearch} />
      <hr />
      <TableItem search={search} />
    </div>
  );
};

export default Home;
