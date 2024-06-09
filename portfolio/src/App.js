import Navbar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Outro from "./components/Outro/outro"
import Footer from "./components/Footer/footer";
import MusicRedirect from "./MusicRedirect";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <>
              <Intro/>
              <Skills/>
              <Works/>
              <Outro/>
              <Footer/>
            </>
          } />
          <Route path="/music" element={<MusicRedirect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
