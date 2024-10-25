import React, { useState } from 'react';
import './Portfolio.css';
import TodoImg from '../assets/img/portfolio/todoApp.PNG';

const Portfolio = () => {
  const projects = [
    {
      title: 'Quiz React',
      description:
        'Aplicativo de Quiz desenvolvido utilizando os conceitos de context e routes do React. O App conta com funcionalidades de dicas e de eliminação de resposta errada. E ao final mostra a pontuação alcançada!',
      additionalInfo: 'Mais informações sobre o projeto aqui.',
      link: '/',
      image: TodoImg,
    },
    {
      title: 'Quiz React',
      description:
        'Aplicativo de Quiz desenvolvido utilizando os conceitos de context e routes do React. O App conta com funcionalidades de dicas e de eliminação de resposta errada. E ao final mostra a pontuação alcançada!',
      additionalInfo: 'Mais informações sobre o projeto aqui.',
      link: '/',
    },
    {
      title: 'Quiz React',
      description:
        'Aplicativo de Quiz desenvolvido utilizando os conceitos de context e routes do React. O App conta com funcionalidades de dicas e de eliminação de resposta errada. E ao final mostra a pontuação alcançada!',
      additionalInfo: 'Mais informações sobre o projeto aqui.',
      link: '/',
    },
    {
      title: 'Quiz React',
      description:
        'Aplicativo de Quiz desenvolvido utilizando os conceitos de context e routes do React. O App conta com funcionalidades de dicas e de eliminação de resposta errada. E ao final mostra a pontuação alcançada!',
      additionalInfo: 'Mais informações sobre o projeto aqui.',
      link: '/',
    },
    {
      title: 'Quiz React',
      description:
        'Aplicativo de Quiz desenvolvido utilizando os conceitos de context e routes do React. O App conta com funcionalidades de dicas e de eliminação de resposta errada. E ao final mostra a pontuação alcançada!',
      additionalInfo: 'Mais informações sobre o projeto aqui.',
      link: '/',
    },
  ];

  return (
    <div className="portfolio-container">
      <h2 className="title-portfolio">Alguns Projetos</h2>
      <div className="content-cards">
        {projects.map((project, index) => {
          const [flipped, setFlipped] = useState(false); // Estado para controle do flip

          return (
            <div
              key={index}
              className={`card ${flipped ? 'flipped' : ''}`}
              onClick={() => setFlipped(!flipped)} // Alterna o estado de flip ao clicar
            >
              <div className="card-body">
                <div
                  className="front"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <h5 className="card-title">{project.title}</h5>
                </div>
                <div className="back">
                  <p className="card-text">{project.description}</p>
                  <div className="links-projects">
                    <a href={project.link}>Vá até o site/aplicativo</a>
                    <a href="/">Visite o reositório</a>
                  </div>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
