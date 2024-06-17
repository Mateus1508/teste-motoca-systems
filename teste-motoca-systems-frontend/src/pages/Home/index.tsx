import React from "react";
import TableHeader from "../../components/TableHeader";
import TableItems from "../../components/TableItems";
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
      <TableItems search={search} />
    </div>
  );
};

export default Home;
