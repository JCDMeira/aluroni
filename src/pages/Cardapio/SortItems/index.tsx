import React, { useState } from "react";
import styles from "./SortItems.module.scss";
import Options from "./ListOfOptions.json";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface SortItemProps {
  canSort: string;
  setCanSort: React.Dispatch<React.SetStateAction<string>>;
}

const SortItems: React.FC<SortItemProps> = ({ canSort, setCanSort }) => {
  const [isOpen, setIsOpen] = useState(false);
  const nameSort =
    canSort && Options.find((option) => option.value === canSort)?.nome;

  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles["ordenador--ativo"]]: canSort !== "",
      })}
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
    >
      <span>{nameSort || "Ordenar por"}</span>
      {isOpen ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles["ordenador__options--ativo"]]: isOpen,
        })}
      >
        {Options.map((option) => (
          <div
            className={styles.ordenador__option}
            key={option.value}
            onClick={() => setCanSort(option.value)}
          >
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  );
};

export default SortItems;
