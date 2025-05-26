import React from 'react';
import './Skills.css';

const skills = [
  "C++", "MATLAB", "Ansys HFSS", "Python (beginner)",
  "Arduino", "GitHub", "AutoCAD", "React (Learning)"
];

const Skills = () => (
  <section id="skills">
    <h2>Technical Skills</h2>
    <div className="skills-container">
      {skills.map((skill, i) => <div key={i} className="skill-card">{skill}</div>)}
    </div>
  </section>
);

export default Skills;
