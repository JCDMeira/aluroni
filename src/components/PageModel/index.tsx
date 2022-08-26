import Header from 'components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const PageModel: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default PageModel;
