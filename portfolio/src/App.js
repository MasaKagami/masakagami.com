import Navbar from "./components/NavBar/navbar";
// import Intro from "./components/intro/intro";
import Intro from "./components/intro/intro-draft";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
// import Outro from "./components/outro/outro"
import Footer from "./components/Footer/footer";
import MusicRedirect from "./MusicRedirect";
import BudgetrRedirect from "./BudgetrRedirect"
// import Contact from "./components/Contact/contact";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import FadeInSection from "./components/fadeInSection/fadeInSection";
import About from "./components/About/about";
// import CursorLine from "./components/CursorLine/cursorLine"

function App() {

  return (
    <Router>
      <div className="App overflow-x-hidden">
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <>
              {/* <CursorLine/> */}
              <Intro/>
              <About />
              <Skills/>
              <Works/>
              <Footer/>
            </>
          } />
          <Route path="/playlist" element={<MusicRedirect />} />
          <Route path="/budgetr" element={<BudgetrRedirect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
