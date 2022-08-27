import classNames from 'classnames';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import MenuItems from 'data/MenuItems.json';

import styles from './Prato.module.scss';

const Prato: React.FC = () => {
  const { id } = useParams();
  const plate = MenuItems.find((item) => item.id === Number(id));

  const navigate = useNavigate();

  if (!plate) {
    return <div></div>;
  }

  return (
    <>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>{plate.title}</h1>
        <div className={styles.imagem}>
          <img src={plate.photo} alt={plate.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>{plate.description}</p>
          <div className={styles.tags}>
            <div
              className={classNames({
                [styles.tags__tipo]: true,
                [styles[`tags__tipo__${plate.category.label.toLowerCase()}`]]:
                  true,
              })}
            >
              {plate.category.label}
            </div>
            <div className={styles.tags__porcao}>{plate.size}g</div>
            <div className={styles.tags__qtdpessoas}>
              Serve {plate.serving} pessoa {plate.serving == 1 ? '' : 's'}
            </div>
            <div className={styles.tags__valor}>
              R$ {plate.price.toFixed(2)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prato;
