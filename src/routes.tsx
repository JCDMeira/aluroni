import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavMenu from 'components/NavMenu';
import PageModel from 'components/PageModel';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';

const Cardapio = lazy(() => import('pages/Cardapio'));
const Home = lazy(() => import('pages/Home'));
const Sobre = lazy(() => import('pages/Sobre'));

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Suspense fallback={<p>Loading</p>}>
          <NavMenu />
          <Routes>
            <Route path="/" element={<PageModel />}>
              <Route index element={<Home />} />
              <Route path="cardapio" element={<Cardapio />} />
              <Route path="sobre" element={<Sobre />} />
            </Route>
            <Route path="/prato/:id" element={<Prato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </main>
  );
}
