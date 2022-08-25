import React from 'react';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import styles from './NavMenu.module.scss';

// import { Container } from './styles';

const NavMenu: React.FC = () => {
  return (
    <nav className={styles.menu}>
      <Logo />
    </nav>
  );
};

export default NavMenu;
