import React from "react";
import filters from "./filters.json";
import styles from "./Filters.module.scss";

type OptionType = typeof filters[0];
// selectedFilter={selectedFilter}
//             setSelectedFilter
interface FiltersTagsProps {
  selectedFilter: number | null;
  setSelectedFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

const FiltersTags: React.FC<FiltersTagsProps> = ({
  selectedFilter,
  setSelectedFilter,
}) => {
  function selecionarFiltro(option: OptionType) {
    if (option.id === selectedFilter) setSelectedFilter(null);
    setSelectedFilter(option.id);
  }

  return (
    <div className={styles.filtros}>
      {filters.map((option) => (
        <button
          className={`${styles.filtros__filtro} ${
            selectedFilter === option.id ? styles["filtros__filtro--ativo"] : ""
          }`}
          key={option.id}
          onClick={() => selecionarFiltro(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default FiltersTags;
