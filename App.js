import React from 'react';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
