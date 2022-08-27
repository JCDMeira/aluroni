import React from 'react';
import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/images/NotFound/not_found.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import stylesTheme from 'styles/theme.module.scss';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [stylesTheme.container]: true,
      })}
    >
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1)}>{'< Voltar'}</button>
      </div>
      <NotFoundImage />
    </div>
  );
};

export default NotFound;
