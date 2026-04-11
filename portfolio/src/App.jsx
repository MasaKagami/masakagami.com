import Navbar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Footer from "./components/Footer/footer";
import ContactForm from "./components/Contact/ContactForm";
import ScrollToTop from "./components/ScrollToTop";
import MusicRedirect from "./MusicRedirect";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About/about";

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/playlist" element={<MusicRedirect />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/*" element={
          <div className="App overflow-x-hidden">
            <Navbar/>
            <Intro/>
            <About />
            <Skills/>
            <Works/>
            <Footer/>
          </div>
        } />
      </Routes>
      <ContactForm />
    </Router>
  );
}

export default App;
