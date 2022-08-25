import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Cardapio from 'pages/Cardapio';
import Home from 'pages/Home';
import NavMenu from 'components/NavMenu';

export default function AppRouter() {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </Router>
  );
}
