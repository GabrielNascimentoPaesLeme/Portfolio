import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Resume.css';
import Typed from 'typed.js';

const Resume = () => {
  const typedRef2 = useRef(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const options2 = {
      strings: [
        `function rocketLaunch() {
  let countdown = 5;
  const interval = setInterval(() => {
    if (countdown >= 0) {
      console.log(countdown);
      countdown--;
    } else {
      console.log("Hello, Moon! 🚀");
      clearInterval(interval);
    }
  }, 1000);}
rocketLaunch();
  5
  4
  3
  2
  1
  0
   Hello, Moon! 🚀`,
      ],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      loop: true,
      cursorChar: '|',
      onComplete: (self) => {
        // Espera 1 segundos após completar a digitação antes de reiniciar
        setTimeout(() => {
          self.start(); // Reinicia a digitação
        }, 1000);
      },
    };

    // Inicia o Typed.js

    const typed2 = new Typed(typedRef2.current, options2);

    // Limpeza do efeito ao desmontar o componente
    return () => {
      typed2.destroy();
    };
  }, []);

  return (
    <div>
      <nav className="nav faixa-nav"></nav>
      <section id="hero" className="hero section dark-background">
        <div className="contents">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="content-text">
              <div className="text-apresentation">
                <div>
                  <h2>Gabriel Paes Leme</h2>
                  <h3>Desenvolvedor Front-end</h3>
                </div>
                <p>
                  Desenvolvedor front-end com sólida experiência em React e
                  Vite, com grande capacidade de adaptação e aprendizado
                  contínuo em projetos complexos. Possuo forte compreensão no
                  desenvolvimento de interfaces e uma atenção cuidadosa aos
                  detalhes, aplicando conceitos de usabilidade e design
                  responsivo de maneira consistente. Já trabalhei com frameworks
                  como Flask e Node.js, construindo APIs REST e integrando-as
                  com front-ends robustos, além de experiência com gerenciadores
                  de estado e integração de bibliotecas como Axios e Bootstrap.
                </p>
              </div>
              <Button variant="primary" onClick={handleShow}>
                Mais Sobre
              </Button>

              <Modal show={show} onHide={handleClose} className='modal-dialog-centered modal-dialog-scrollable'>
                <Modal.Header closeButton>
                  <Modal.Title>Sobre</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Desenvolvedor front-end com sólida experiência em React e
                  Vite, com grande capacidade de adaptação e aprendizado
                  contínuo em projetos complexos. Possuo uma forte compreensão
                  de desenvolvimento de interfaces e uma atenção cuidadosa aos
                  detalhes, aplicando conceitos de usabilidade e design
                  responsivo de maneira consistente. Já trabalhei com frameworks
                  como Flask e Node.js, construindo APIs REST e integrando-as
                  com front-ends robustos. Experiência com gerenciadores de
                  estado e integração de bibliotecas como Axios e Bootstrap.
                  Profissional meticuloso, com habilidades comprovadas em deploy
                  de aplicações utilizando GitHub Pages e hospedagens diversas,
                  além de conhecimento em configurações de workflows e automação
                  com GitHub Actions. Busco constantemente aprimorar meus
                  conhecimentos, explorando áreas como testes automatizados,
                  autenticação e segurança de dados, e possuo forte inclinação
                  para a resolução de problemas.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <div className="content-image">
              <h3 className="code-content">
                <code>
                  <span
                    ref={typedRef2} // Segunda instância do Typed
                    className="typed"
                  ></span>
                  <span
                    className="typed-cursor typed-cursor--blink"
                    aria-hidden="true"
                  ></span>
                </code>
              </h3>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="text-info">
            <h3>
              <strong>+</strong>2
            </h3>
            <p>Anos de experiência</p>
          </div>

          <div className="text-info">
            <h3>
              <strong>+</strong>20
            </h3>
            <p>Projetos concluídos</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
