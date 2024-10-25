import React from 'react';
import './FormContact.css';

const FormContact = () => {
  return (
    <div className="form-contact">
      <h2>Contato</h2>
      <div className="formControl">
        <div className="contacts">
          <h3>Mande uma Mensagem</h3>
          <div className="wpp contact-form">
            <i class="bi bi-whatsapp"></i>
            <p>(31) 9.9578-0478</p>
          </div>
        </div>
      </div>

      <div className="formControl">
        <h3>Envie um E-mail</h3>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
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
          <label for="exampleFormControlTextarea1" className="form-label">
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
  );
};

export default FormContact;
