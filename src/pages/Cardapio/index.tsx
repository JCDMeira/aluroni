import styles from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Cardapio: React.FC = () => {
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
    </main>
  );
};

export default Cardapio;
