import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Header from './components/header';
import ScrollToSection from './components/ScrollToSection';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToSection>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </ScrollToSection>
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App;
