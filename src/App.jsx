import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import './App.scss';
import './index.scss'
import Homepage from './pages/Homepage/Homepage';
import FAQ from './pages/FAQ/Faq';
import NotFound from './pages/404/NotFound';

const App = () => (
  <div>
    <NotFound />
  </div>
);

export default App;
