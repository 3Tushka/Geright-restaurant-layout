import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import './App.scss';
import './index.scss'
import { AboutPage, Faq } from './pages/index.js';


const App = () => (
  <div>
    <AboutPage />
  </div>
);

export default App;
