import React from 'react';

const Resume = () => {
  const proficiencies = [
    "JavaScript",
    "React",
    "Node.js",
    "Css",
    "HTML",
    "APIs",
    "MYSQL",
    "MongoDB",
    "MVC"
  ];

  return (
    <section>
      <h2>Resume</h2>
      <a href="https://docs.google.com/document/d/11FenpMJ7LmKxQ4QpvM25j0AJDVpBYjPwZA9SLoRf5L8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
