import { HiHome } from "react-icons/hi";
import avatar from "../../assets/avatar.png";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleRedirectToHome = () => {
    navigate("/");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.items}>
        <button onClick={handleRedirectToHome}>
          <HiHome size={32} />
        </button>
        <img className={styles.img} src={avatar} alt="avatar perfil" />
        <span className={styles.status}></span>
      </div>
    </nav>
  );
};

export default Navbar;
