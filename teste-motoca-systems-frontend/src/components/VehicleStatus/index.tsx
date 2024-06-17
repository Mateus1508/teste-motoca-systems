import React from "react";
import styles from "./styles.module.css";
interface Props {
  status: number;
}

type DataType = {
  text: string;
  color: string;
};

const VehicleStatus = ({ status }: Props) => {
  const [data, setData] = React.useState<DataType>({
    text: "Em estoque",
    color: styles.status1,
  });

  React.useEffect(() => {
    switch (status) {
      case 1:
        setData({ text: "Em estoque", color: styles.status1 });
        break;
      case 2:
        setData({ text: "Em trânsito", color: styles.status2 });
        break;
      case 3:
        setData({ text: "Sem estoque", color: styles.status3 });
        break;
      default:
        setData({ text: "Em estoque", color: styles.status1 });
    }
  }, [status]);

  return <span className={data.color}>{data.text}</span>;
};

export default VehicleStatus;
