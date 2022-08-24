import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Cardapio from 'pages/Cardapio';
import Home from 'pages/Home';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </Router>
  );
}
