import React, { useEffect, useRef } from 'react';
import './Resume.css';
import Typed from 'typed.js';

const Resume = () => {
  const typedRef2 = useRef(null);

  useEffect(() => {
    const options2 = {
      strings: [
        `function rocketLaunch() {
  let countdown = 5;
  const interval = setInterval(() => {
    if (countdown > 0) {
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Necessitatibus perferendis consequuntur dicta harum accusamus
                  quisquam quis optio natus non, deserunt, voluptatum officiis
                  corrupti magnam fugiat reiciendis tempora! Excepturi, vel
                  explicabo? Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Vero excepturi eaque fugiat cum nihil adipisci officia
                  necessitatibus..
                </p>
              </div>
              <button>Saiba mais</button>
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
              <strong>+</strong>30
            </h3>
            <p>Projetos concluídos</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
