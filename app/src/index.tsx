import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './comp/Nav'
import About from './comp/About';
import Fullstack from './comp/Fullstack';
import Skills from './comp/Skills';
import Contact from './comp/Contact';
import Footer from './comp/Footer';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const mainRoot = document.getElementById('root');
root.render(
  <React.StrictMode>
    <Nav />
    <About />
    <Fullstack />
    <Skills />
    <Contact />
    <Footer />
  </React.StrictMode>
);


