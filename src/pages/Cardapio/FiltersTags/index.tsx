import React from 'react';
import filters from './filters.json';
import styles from './Filters.module.scss';
import classNames from 'classnames';

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
    if (option.id === selectedFilter) {
      setSelectedFilter(null);
      return;
    }
    setSelectedFilter(option.id);
  }

  return (
    <div className={styles.filtros}>
      {filters.map((option) => (
        <button
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: selectedFilter === option.id,
          })}
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
