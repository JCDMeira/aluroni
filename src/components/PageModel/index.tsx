import Header from 'components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

import stylesTheme from 'styles/theme.module.scss';

const PageModel: React.FC = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className={stylesTheme.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
};

export default PageModel;
