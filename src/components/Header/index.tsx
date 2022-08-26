import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__text}>A casa do código e da massa</div>
    </header>
  );
};

export default Header;
