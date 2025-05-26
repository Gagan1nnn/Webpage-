import React from 'react';

const projects = [
  {
    title: "DC Motor Control Using PWM",
    description: "Arduino-based speed and direction control using PWM.",
    tech: "Arduino, Embedded C"
  },
  {
    title: "Electric Vehicle Design",
    description: "Drivable EV with custom BMS and control system.",
    tech: "BMS, Power Electronics"
  },
  {
    title: "Antenna Array Design in HFSS",
    description: "MIMO 5G patch antennas designed in Ansys HFSS.",
    tech: "HFSS, MIMO, 5G"
  }
];

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="projects-container">
      {projects.map((proj, i) => (
        <div key={i} className="project-card">
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <p><strong>Tech Used:</strong> {proj.tech}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
