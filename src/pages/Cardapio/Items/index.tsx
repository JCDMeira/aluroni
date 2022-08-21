import React, { useCallback, useEffect, useState } from "react";

import Item from "./Item";

import MenuItems from "./MenuItems.json";
import styles from "./Items.module.scss";

interface ItemProps {
  searchInput: string;
  selectedFilter: number | null;
  canSort: string;
}

const Items: React.FC<ItemProps> = ({
  searchInput,
  selectedFilter,
  canSort,
}) => {
  const [list, setList] = useState(MenuItems);
  console.log("passei");
  const onSearch = useCallback(
    (title: string) => {
      const regex = new RegExp(searchInput, "i");
      return regex.test(title);
    },
    [searchInput]
  );

  const onFilter = useCallback(
    (id: number) => {
      if (selectedFilter !== null) return selectedFilter === id;
      return true;
    },
    [selectedFilter]
  );

  useEffect(() => {
    const newList = MenuItems.filter(
      (item) => onSearch(item.title) && onFilter(item.category.id)
    );
    setList(newList);
  }, [onFilter, onSearch, searchInput, selectedFilter]);

  return (
    <div className={styles.itens}>
      {list.map((menuItem) => (
        <Item key={menuItem.id} {...menuItem} />
      ))}
    </div>
  );
};

export default Items;
