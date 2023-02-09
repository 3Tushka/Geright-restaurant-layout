import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Faq, AboutPage, Homepage, Contact, Team, NotFound } from './pages';


import './App.scss';
import './index.scss'


const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/src/pages/Homepage" element={<Homepage />} />
        <Route path="/src/pages/About" element={<AboutPage />} />
        <Route path="/src/pages/Contact" element={<Contact />} />
        <Route path="/src/pages/Team" element={<Team />} />
        <Route path="/src/pages/FAQ" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </div>
);

export default App;
