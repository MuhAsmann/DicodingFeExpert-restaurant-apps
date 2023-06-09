import 'regenerator-runtime';
import '../styles/main.css';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('.navlist'),
  content: document.querySelector('main'),
  jumbotron : document.querySelector('.jumbotron'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
  swRegister(); 
});

