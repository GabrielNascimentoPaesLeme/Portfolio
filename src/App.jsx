import { useEffect } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'glightbox/dist/css/glightbox.min.css';
import GLightbox from 'glightbox';
import 'swiper/css'; // Importa o CSS base do Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './App.css';
import './index.css';
import Nav from './component/Nav';
import Resume from './routes/Resume';
import Portfolio from './routes/Portfolio';
import FormContact from './routes/FormContact';

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve();
    };
    script.onerror = () => {
      reject(new Error(`Script load error for ${src}`));
    };
    document.body.appendChild(script);
  });
};

const App = () => {
  useEffect(() => {
    const scripts = [
      '/vendor/bootstrap/js/bootstrap.bundle.min.js',
      '/vendor/php-email-form/validate.js',
      '/vendor/aos/aos.js',
      '/vendor/typed.js/typed.umd.js',
      '/vendor/purecounter/purecounter_vanilla.js',
      '/vendor/waypoints/noframework.waypoints.js',
      '/vendor/glightbox/js/glightbox.min.js',
      '/vendor/imagesloaded/imagesloaded.pkgd.min.js',
      '/vendor/isotope-layout/isotope.pkgd.min.js',
      '/vendor/swiper/swiper-bundle.min.js',
    ];

    // Carregar todos os scripts
    Promise.all(scripts.map(loadScript))
      .then(() => {
        // Inicialize bibliotecas que dependem dos scripts aqui, se necessário
        GLightbox({
          selector: '.glightbox',
        });
        AOS.init();
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="container-app">
      <Nav />
      <div className="main-section">
        <Resume />
        <Portfolio />
        <FormContact/>
      </div>
    </div>
  );
};

export default App;
