import React, { useState } from 'react';
import styles from './Cardapio.module.scss';

import SearchBar from './SearchBar';
import FiltersTags from './FiltersTags';
import SortItems from './SortItems';
import Items from './Items';
import NavMenu from 'components/NavMenu';

const Cardapio: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<number | null>(null);
  const [canSort, setCanSort] = useState('');

  return (
    <main>
      <NavMenu />
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
          <SortItems canSort={canSort} setCanSort={setCanSort} />
        </div>
        <Items
          searchInput={searchInput}
          selectedFilter={selectedFilter}
          canSort={canSort}
        />
      </section>
    </main>
  );
};

export default Cardapio;
