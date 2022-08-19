import React from "react";
import styles from "./Cardapio.module.scss";

const Cardapio: React.FC = () => {
  return (
    <main>
      <nav className={styles.menu}>
        <img src="../../assets/images/logo.svg" alt="logo do aluroni" />
      </nav>
    </main>
  );
};

export default Cardapio;
