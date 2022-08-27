import classNames from 'classnames';
import React from 'react';
import { PlateType } from 'types/MenuItemsTypes';

import styles from './Tags.module.scss';

const Tags: React.FC<PlateType> = ({ category, serving, price, size }) => {
  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.tags__tipo]: true,
          [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.tags__porcao}>{size}g</div>
      <div className={styles.tags__qtdpessoas}>{`Serve ${serving} ${
        serving === 1 ? 'pessoa' : 'pessoas'
      }`}</div>
      <div className={styles.tags__valor}>R${price.toFixed(2)}</div>
    </div>
  );
};

export default Tags;
