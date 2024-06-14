import { BiTrashAlt } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import styles from "./styles.module.css";
import VehicleStatus from "../VehicleStatus";

const TableItem = () => {
  return (
    <div>
      <table className={styles.tableContainer}>
        <tbody>
          <tr className={styles.tableRow}>
            <td>#0001</td>
            <td>
              <h3>
                Nome da moto <VehicleStatus status={1} />
              </h3>
              <p>Valor: </p>
              <p>Cor: </p>
            </td>
            <td>
              <button>
                <BiTrashAlt color="red" size={24} />
              </button>
              <button>
                <IoEyeOutline size={24} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableItem;
