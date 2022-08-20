import React from "react";
import filters from "./filters.json";
import styles from "./Filters.module.scss";

type OptionType = typeof filters[0];

const FiltersTags: React.FC = () => {
  function selecionarFiltro(option: OptionType) {
    console.log(option);
  }

  return (
    <div className={styles.filtros}>
      {filters.map((option) => (
        <button
          className={styles.filtros__filtro}
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
