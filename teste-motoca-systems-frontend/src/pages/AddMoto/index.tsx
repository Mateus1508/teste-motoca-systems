import Form from "../../components/Form";
import styles from "./styles.module.css";
const AddMoto = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Registros de motos</h1>
      <hr />
      <Form />
    </div>
  );
};

export default AddMoto;
