import React from "react";

import Item from "./Item";

import MenuItems from "./MenuItems.json";
import styles from "./Items.module.scss";

const Items: React.FC = () => {
  return (
    <div className={styles.itens}>
      {MenuItems.map((menuItem) => (
        <Item key={menuItem.id} {...menuItem} />
      ))}
    </div>
  );
};

export default Items;
