import React from 'react';
import MenuItems from 'data/MenuItems.json';

import styles from './Home.module.scss';
import stylesTheme from 'styles/theme.module.scss';

import imageHome from 'assets/images/nossa_casa.png';
import { useNavigate } from 'react-router-dom';

type plate = typeof MenuItems[0];

const Home: React.FC = () => {
  const recommended = [...MenuItems]
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  const navigate = useNavigate();

  const redirectForDetail = (plate: plate) => {
    navigate(`/prato/${plate.id}`, { state: { plate } });
  };

  return (
    <section>
      <h3 className={stylesTheme.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {recommended.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirectForDetail(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>

      <h3 className={stylesTheme.titulo}> Nossa casa </h3>
      <div className={styles.nossaCasa}>
        <img src={imageHome} alt="Casa do aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
};

export default Home;
