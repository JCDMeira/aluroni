import React from "react";
import styles from "./SearchBar.module.scss";
import { CgSearch } from "react-icons/cg";

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
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
};

export default SearchBar;
