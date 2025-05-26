import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <h1>Gagan N</h1>
    <ul>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="/resume.pdf" download onClick={() => alert("Resume downloaded!")}>Resume</a></li>
    </ul>
  </nav>
);

export default Navbar;
