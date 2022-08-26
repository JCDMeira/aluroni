import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Cardapio from 'pages/Cardapio';
import Home from 'pages/Home';
import NavMenu from 'components/NavMenu';
import PageModel from 'components/PageModel';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<PageModel />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Cardapio />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
