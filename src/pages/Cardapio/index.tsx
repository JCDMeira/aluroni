import { useState } from "react";
import styles from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/images/logo.svg";

import SearchBar from "./SearchBar";
import FiltersTags from "./FiltersTags";

const Cardapio: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<number | null>(null);

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <div className={styles.cardapio__filtros}>
          <FiltersTags
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        </div>
      </section>
    </main>
  );
};

export default Cardapio;
