import React, { memo } from 'react';
import styles from './SearchBar.module.scss';
import { CgSearch } from 'react-icons/cg';

const iconSearch = <CgSearch size={20} color="#4C4D5E" />;
interface SearchBarProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchInput,
  setSearchInput,
}) => {
  return (
    <div className={styles.buscador}>
      <input
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
        placeholder="Buscar"
      />
      {iconSearch}
    </div>
  );
};

export default memo(SearchBar);
