import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavMenu from 'components/NavMenu';
import PageModel from 'components/PageModel';
import Cardapio from 'pages/Cardapio';
import Home from 'pages/Home';
import Sobre from 'pages/Sobre';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<PageModel />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/prato/:id" element={<Prato />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
