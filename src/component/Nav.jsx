import React, { useEffect, useRef, useState } from 'react';
import './Nav.css';
import profileImg from '../assets/img/my-profile-img.jpg';
import Typed from 'typed.js';

const Nav = () => {
  const typedRef = useRef(null);
  const [headerToggle, setHeaderToggle] = useState(true);
  const [stateBurger, setStateBurger] = useState('bi-three-dots-vertical');

  const getToggle = () => {
    if (headerToggle) {
      if (stateBurger === 'bi-three-dots-vertical') {
        setHeaderToggle(false);
        setStateBurger('bi-x');
        console.log(stateBurger);
        console.log(headerToggle);
      }
    } else {
      console.log(stateBurger);
      console.log(headerToggle);
      setHeaderToggle(true);
      setStateBurger('bi-three-dots-vertical');
    }
  };

  useEffect(() => {
    const options = {
      strings: ['Hello, World!', 'Vamos Codar!'],
      typeSpeed: 50, // Velocidade de digitação
      backSpeed: 25, // Velocidade de apagamento
      loop: true, // Loop infinito
      cursorChar: '|', // Cursor
    };

    // Inicia o Typed.js
    const typed = new Typed(typedRef.current, options);

    // Limpeza do efeito ao desmontar o componente
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <header
        id="header"
        className={`header dark-background d-flex flex-column ${headerToggle ? '' : 'header-show'}`}
      >
        <i
          className={`header-toggle burger bi ${stateBurger}`}
          onClick={getToggle}
        ></i>

        <div className="profile-img">
          <img src={profileImg} alt="" className="img-fluid rounded-circle" />
          <a
            href="index.html"
            className="name-code d-flex align-items-center justify-content-center"
          >
            <h1 className="sitename">Gabriel Paes Leme</h1>
            <h3 className="code">
              <code>
                <span
                  ref={typedRef} // Aqui está a referência
                  className="typed"
                ></span>
                <span
                  className="typed-cursor typed-cursor--blink"
                  aria-hidden="true"
                ></span>
              </code>
            </h3>
          </a>
        </div>

        <div className="scrollable-content">
          <div className="links-nav">

            <p className="flex-link">
              <a href="#">Resumo</a>
            </p>

            <p className="flex-link">
              <a href="#">Sobre</a>
            </p>

            <p className="flex-link">
              <a href="#">Portfólio</a>
            </p>

            <p className="contact">
              <a href="#">Contato</a>
            </p>

          </div>

          <div className="progress-content">
            <h5>Skills</h5>
            <div className="linguages">
              <div className="progress-html">
                <div className="text-progress">
                  <p>HTML</p>
                  <p>90%</p>
                </div>

                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example 10px high"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-warning text-dark"
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
              <div className="progress-css">
                <div className="text-progress">
                  <p>CSS</p>
                  <p>90%</p>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example 10px high"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-warning text-dark"
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>

              <div className="progress-js">
                <div className="text-progress">
                  <p>JavaScript</p>
                  <p>80%</p>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example 10px high"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-warning text-dark"
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>

              <div className="progress-react">
                <div className="text-progress">
                  <p>React</p>
                  <p>75%</p>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example 10px high"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-warning text-dark"
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>

              <div className="progress-node">
                <div className="text-progress">
                  <p>Node</p>
                  <p>25%</p>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example 10px high"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-warning text-dark"
                    style={{ width: '20%' }}
                  ></div>
                </div>
              </div>

              <div className="progress-python">
                <div className="text-progress">
                  <p>Python</p>
                  <p>20%</p>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example 10px high"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-warning text-dark"
                    style={{ width: '20%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="check-skills">
            <div className="skill">
              <i class="bi bi-check"></i>
              <p>Bootstrap, Material UI</p>
            </div>

            <div className="skill">
              <i class="bi bi-check"></i>
              <p>Requisições HTTP, Axios, APIs</p>
            </div>

            <div className="skill">
              <i class="bi bi-check"></i>
              <p>Git, GitHub</p>
            </div>
          </div>
        </div>

        <div className="social-links text-center">
          <a href="#" className="twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="google-plus">
            <i className="bi bi-skype"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Nav;
