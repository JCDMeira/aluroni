import React from 'react';
import MenuItems from 'data/MenuItems.json';

import styles from './Home.module.scss';
import stylesTheme from 'styles/theme.module.scss';

const Home: React.FC = () => {
  const recommended = [...MenuItems]
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className={stylesTheme.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {recommended.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recomendado__botao}>Ver mais</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
