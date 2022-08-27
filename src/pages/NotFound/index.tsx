import React from 'react';
import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/images/NotFound/not_found.svg';
import classNames from 'classnames';

import stylesTheme from 'styles/theme.module.scss';

const NotFound: React.FC = () => {
  return (
    <div
      className={classNames({
        [styles.container]: true,
        [stylesTheme.container]: true,
      })}
    >
      <NotFoundImage />
    </div>
  );
};

export default NotFound;
