import Header from 'components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

import stylesTheme from 'styles/theme.module.scss';

const PageModel: React.FC = () => {
  return (
    <>
      <Header />
      <div className={stylesTheme.container}>
        <Outlet />
      </div>
    </>
  );
};

export default PageModel;
