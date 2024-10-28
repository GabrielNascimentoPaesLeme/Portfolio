import React from 'react';
import './FormContact.css';

const FormContact = () => {
  return (
    <div id='contato' className="form-contact">
      <h2>Contato</h2>
      <div className="forms">

        <div className='netWorkCurriculo'>
          <div className="formControl netWork">
            <div className="contacts">
              <h3>Redes Sociais</h3>
              <div className="contact-form">
                <a className='wpp contact-icons'>
                  <i className="bi bi-whatsapp"></i> 
                  WhatsApp
                </a>
                <a className='linkedin contact-icons'>
                  <i className="bi bi-linkedin"></i> 
                  Linkedin
                </a>
                <a className='github contact-icons'>
                  <i className="bi bi-github"></i> 
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="formControl curriculo">
            <div className="contacts">
              <div className="text">
                <h3>Currículo</h3>
                <p>Baixe um pdf do meu currículo</p>
              </div>
              <div className="pdf">
                <a href="/curriculo.pdf" download="C.V - Gabriel Paes Leme.pdf" className='linkPdf'>
                <i className="bi bi-file-earmark-arrow-down"></i>
                Download</a>
              </div>
            </div>
          </div>
        </div>

        <div className="formControl email">
          <h3>Envie um E-mail</h3>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="button" className="btn btn-success">
            Light
          </button>
        </div>

      </div>
    </div>
  );
};

export default FormContact;
