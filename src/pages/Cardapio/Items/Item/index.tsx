import React from "react";
import classNames from "classnames";
import styles from "./Item.module.scss";
import MenuItems from "../MenuItems.json";

type Props = typeof MenuItems[0];

const Item: React.FC<Props> = (props) => {
  const { title, description, category, size, serving, price, photo } = props;

  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classNames({
              [styles.item__tipo]: true,
              [styles[`item__tipo__${category.label.toLowerCase()}`]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={styles.item__porcao}>{size}g</div>
          <div className={styles.item__qtdpessoas}>{`Serve ${serving} ${
            serving === 1 ? "pessoa" : "pessoas"
          }`}</div>
          <div className={styles.item__valor}>R${price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
