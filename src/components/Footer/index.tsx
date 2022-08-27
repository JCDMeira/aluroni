import React from 'react';
import styles from './Footer.module.scss';

import { ReactComponent as Logo } from 'assets/images/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
};

export default Footer;
