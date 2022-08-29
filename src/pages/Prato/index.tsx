import React, { lazy } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import MenuItems from 'data/MenuItems.json';

import styles from './Prato.module.scss';

const Tags = lazy(() => import('components/Tags'));
const NotFound = lazy(() => import('pages/NotFound'));
const PageModel = lazy(() => import('components/PageModel'));

const Prato: React.FC = () => {
  const { id } = useParams();
  const plate = MenuItems.find((item) => item.id === Number(id));

  const navigate = useNavigate();

  return (
    <>
      {plate ? (
        <PageModel>
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
              <Tags {...plate} />
            </div>
          </section>
        </PageModel>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Prato;
