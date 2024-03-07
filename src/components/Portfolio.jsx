import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'MyFirstBlog', imageUrl: '/blog1.png', demoUrl: 'https://myfirst-blog-2289a4545ead.herokuapp.com/', repoUrl: 'https://github.com/McKee-T/blog-app' },
    { title: 'NoteTime', imageUrl: '/notetaker1.png', demoUrl: 'https://note-time-1e385a8ae86f.herokuapp.com/', repoUrl: 'https://note-time-1e385a8ae86f.herokuapp.com/' },
    { title: 'Weather Dash', imageUrl: '/weatherdash2.png', demoUrl: 'https://weather-dash-5bf9daea8dba.herokuapp.com/', repoUrl: 'https://github.com/McKee-T/weather-app' },
    { title: 'Fivestar', imageUrl: '/fivestar.png', demoUrl: 'https://mckee-t.github.io/media-review/', repoUrl: 'https://github.com/McKee-T/media-review' },
    { title: 'Original Portfolio', imageUrl: '/ogportfolio.png', demoUrl: 'https://mckee-t.github.io/personalPortfolio/', repoUrl: 'https://github.com/McKee-T/personalPortfolio' },
    { title: 'React Portfolio', imageUrl: '/reactportfolio.png', demoUrl: 'url_to_demo_6', repoUrl: 'https://github.com/McKee-T/react-portfolio' },
  
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <div className="overlay">
              <div className="links">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </div>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
