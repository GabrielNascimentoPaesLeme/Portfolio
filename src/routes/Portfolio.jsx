import React, { useState } from 'react';
import './Portfolio.css';
import TodoImg from '../assets/img/portfolio/todoApp.PNG';
import QuizGif from '../assets/img/portfolio/quiz-Gif.gif';
import TributoSabota from '../assets/img/portfolio/TributoSabota.gif';
import LoginAutenticado from '../assets/img/portfolio/LoginAutenticado.png';
import Manutencao from '../assets/img/portfolio/manutencao.jpg';

const Portfolio = () => {
  const projects = [
    {
      title: 'Quiz React',
      description:
        'Aplicativo de Quiz desenvolvido utilizando os conceitos de context e routes do React. O App conta com funcionalidades de dicas e de eliminação de resposta errada. No final mostra a pontuação alcançada!',
      additionalInfo: 'Mais informações sobre o projeto aqui.',
      linkRepo: 'https://github.com/GabrielNascimentoPaesLeme/QuizReact',
      linkSite: 'https://gabrielnascimentopaesleme.github.io/QuizReact/',
      image: QuizGif,
    },
    {
      title: 'ToDo React',
      description:
        'Este é um aplicativo simples de gerenciamento de tarefas que permite aos usuários adicionar, editar, excluir, pesquisar e filtrar tarefas. As tarefas são armazenadas no localStorage para garantir persistência entre as sessões.',
      additionalInfo: 'Mais informações sobre o projeto aqui.',
      linkRepo: 'https://github.com/GabrielNascimentoPaesLeme/ToDo-Avancado',
      linkSite: 'https://gabrielnascimentopaesleme.github.io/ToDo-Avancado/',
      image: TodoImg,
    },
    {
      title: 'Tributo Sabotagem',
      description:
        'Página Tributo ao Sabotage, um projeto dedicado a homenagear a vida e a obra de Mauro Mateus dos Santos, conhecido como Sabotage. Sabotage foi um dos maiores nomes do rap nacional, deixando um legado inesquecível na música e no cinema brasileiro.',
      additionalInfo: 'Mais informações sobre o projeto aqui.',
      linkRepo: 'https://github.com/GabrielNascimentoPaesLeme/Pagina-tributo-Sabotagem',
      linkSite: 'https://gabrielnascimentopaesleme.github.io/Pagina-tributo-Sabotagem/',
      image: TributoSabota,
    },
    {
      title: 'App de Receitas',
      description: 'Aplicação web que permite aos usuários gerenciar receitas culinárias, oferecendo funcionalidades como criação, edição, visualização, pesquisa, e favoritar receitas. A arquitetura do backend é baseada em Node.js com Express e um frontend construído com React.js. A autenticação é feita utilizando JWT, com funcionalidades de registro e login.',
      additionalInfo: 'Mais informações sobre o projeto aqui.',
      linkRepo: 'https://github.com/GabrielNascimentoPaesLeme/WebRecipes',
      linkSite: 'https://web-recipes-smoky.vercel.app/',
      image: Manutencao,
    },
    {
      title: 'Login Autenticado',
      description:
        'Aplicação full-stack de autenticação e autorização que utiliza Node.js e Express no back-end, com um front-end em React e React Router. Ele permite a criação e autenticação de usuários, geração de tokens JWT, e inclui uma implementação de refresh token. O front-end conecta-se ao back-end para gerenciar o fluxo de login, registro e autorização.',
      additionalInfo: 'Mais informações sobre o projeto aqui.',
      linkRepo: 'https://github.com/GabrielNascimentoPaesLeme/LoginAutenticado',
      linkSite: 'https://login-autenticado-robk.vercel.app',
      image: LoginAutenticado,
    },
  ];

  return (
    <div id="portfolio" className="portfolio-container">
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
                    <a href={project.linkSite} target="blink">
                      Vá até o site/aplicativo
                    </a>
                    <a href={project.linkRepo} target="_blank">
                      Visite o repositório
                    </a>
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
