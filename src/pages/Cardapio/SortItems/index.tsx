import React from "react";
import styles from "./SortItems.module.scss";
import Options from "./ListOfOptions.json";
import classNames from "classnames";

interface SortItemProps {
  canSort: string;
  setCanSort: React.Dispatch<React.SetStateAction<string>>;
}

const SortItems: React.FC<SortItemProps> = ({ canSort, setCanSort }) => {
  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles["ordenador--ativo"]]: canSort !== "",
      })}
    >
      <span>Ordenar por</span>
      <div className={styles.ordenador__opitons}>
        {Options.map((option) => (
          <div className={styles.ordenador__option} key={option.value}>
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  );
};

export default SortItems;
