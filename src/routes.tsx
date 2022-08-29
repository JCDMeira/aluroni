import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavMenu from 'components/NavMenu';
import Footer from 'components/Footer';

const Cardapio = lazy(() => import('pages/Cardapio'));
const Home = lazy(() => import('pages/Home'));
const Sobre = lazy(() => import('pages/Sobre'));
const PageModel = lazy(() => import('components/PageModel'));
const NotFound = lazy(() => import('pages/NotFound'));
const Prato = lazy(() => import('pages/Prato'));

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <NavMenu />
        <Suspense fallback={<p>Loading</p>}>
          <Routes>
            <Route path="/" element={<PageModel />}>
              <Route index element={<Home />} />
              <Route path="cardapio" element={<Cardapio />} />
              <Route path="sobre" element={<Sobre />} />
            </Route>
            <Route path="/prato/:id" element={<Prato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
}
