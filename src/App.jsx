import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Bar, Customers } from './container';
import { Navbar } from './components';
import './App.scss';
import './index.scss'

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Bar />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Customers />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
