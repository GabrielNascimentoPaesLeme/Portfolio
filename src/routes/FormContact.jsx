import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './FormContact.css';

const FormContact = () => {
  const [formData, setFormData] = useState({
    to_name: 'Gabriel',
    from_name: '',
    user_email: '',
    message: '',
    subject: '',
  });

  // Inicializando o EmailJS ao carregar o componente
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID); // Substitua pelo seu User ID do EmailJS
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Usando o import.meta.env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Usando o import.meta.env
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID // Usando o import.meta.env
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email enviado com sucesso!');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Erro ao enviar o email.');
      });
  };

  return (
    <div id="contato" className="form-contact">
      <h2>Contato</h2>
      <div className="forms">
        <div className="netWorkCurriculo">
          <div className="formControl netWork">
            <div className="contacts">
              <h3>Redes Sociais</h3>
              <div className="contact-form">
                <a
                  href="https://wa.me/5531995780478?text=Ol%C3%A1%2C%20digite%20sua%20mensagem%20que%20eu%20j%C3%A1%20respondo%21!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wpp contact-icons"
                >
                  <i className="bi bi-whatsapp"></i>
                  WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriel-do-nascimento-paes-leme-aa0794233/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin contact-icons"
                >
                  <i className="bi bi-linkedin"></i>
                  Linkedin
                </a>
                <a
                  href="https://github.com/GabrielNascimentoPaesLeme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github contact-icons"
                >
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
                <a
                  href="/curriculo.pdf"
                  download="C.V - Gabriel Paes Leme.pdf"
                  className="linkPdf"
                >
                  <i className="bi bi-file-earmark-arrow-down"></i>
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="formControl email">
          <h3>Envie um E-mail</h3>
          <form onSubmit={sendEmail}>
            <div className="remetente">
              <div className="mb-3">
                <label htmlFor="from_name" className="form-label">
                  Seu Nome
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className="form-control"
                  id="from_name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Assunto
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control"
                  id="subject"
                  required
                />
              </div>
              <div className="mb-3 email-remetente">
                <label htmlFor="user_email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  className="form-control"
                  id="user_email"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Sua Mensagem
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                id="message"
                rows="3"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-success">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
