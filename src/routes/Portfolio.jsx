import React, { useState } from 'react';
import './Portfolio.css';
import TodoImg from '../assets/img/portfolio/todoApp.PNG';
import QuizGif from '../assets/img/portfolio/quiz-Gif.gif'
import TributoSabota from '../assets/img/portfolio/TributoSabota.gif'
import LoginAutenticado from '../assets/img/portfolio/LoginAutenticado.png'
import Manutencao from '../assets/img/portfolio/manutencao.jpg'

const Portfolio = () => {
  const projects = [
    {
      title: 'Quiz React',
      description:
        'Aplicativo de Quiz desenvolvido utilizando os conceitos de context e routes do React. O App conta com funcionalidades de dicas e de eliminação de resposta errada. No final mostra a pontuação alcançada!',
      additionalInfo: 'Mais informações sobre o projeto aqui.',
      link: 'https://gabrielnascimentopaesleme.github.io/QuizReact/',
      image: QuizGif,
    },
    {
      title: 'ToDo React',
      description:
        'Aplicativo de Quiz desenvolvido utilizando os conceitos de context e routes do React. O App conta com funcionalidades de dicas e de eliminação de resposta errada. E ao final mostra a pontuação alcançada!',
      additionalInfo: 'Mais informações sobre o projeto aqui.',
      link: 'https://gabrielnascimentopaesleme.github.io/ToDo-Basico-React/',
      image: TodoImg,
    },
    {
      title: 'Tributo Sabotagem',
      description:
        'Aplicativo de Quiz desenvolvido utilizando os conceitos de context e routes do React. O App conta com funcionalidades de dicas e de eliminação de resposta errada. E ao final mostra a pontuação alcançada!',
      additionalInfo: 'Mais informações sobre o projeto aqui.',
      link: 'https://gabrielnascimentopaesleme.github.io/Pagina-tributo-Sabotagem/',
      image: TributoSabota,
    },
    {
      title: 'App de Receitas',
      description:
        'Em Manutenção. Menos de 2 dias estará no ar',
      additionalInfo: 'Mais informações sobre o projeto aqui.',
      link: '/',
      image: Manutencao
    },
    {
      title: 'Login Autenticado',
      description:
        'Aplicativo de Quiz desenvolvido utilizando os conceitos de context e routes do React. O App conta com funcionalidades de dicas e de eliminação de resposta errada. E ao final mostra a pontuação alcançada!',
      additionalInfo: 'Mais informações sobre o projeto aqui.',
      link: 'https://login-autenticado-robk.vercel.app',
      image: LoginAutenticado,
    },
  ];

  return (
    <div id='portfolio' className="portfolio-container">
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
                    <a href={project.link} target='blink'>Vá até o site/aplicativo</a>
                    <a href={project.link} target='_blank'>Visite o repositório</a>
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
