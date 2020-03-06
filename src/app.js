import './app.scss';
import { createElement, appendContent } from './lib/dom';
import { title } from './components/title';
import {
  createHeading,
  createParagraph,
  createButton
} from './components/container';
import Logo from './assets/butterbrot.png';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });

  const logo = createElement('img', {
    className: 'logo',
    src: Logo
  });

  const titleElement = title('Meal Generator');
  const heading = createHeading('What should I eat today?');
  const paragraph = createParagraph(`You're hungry and need menu suggestions?
  Just click this button and get a very delicious recipe!`);
  const btn = createButton('→ Get recipe');

  appendContent(header, [logo, titleElement]);
  appendContent(main, [heading, paragraph, btn]);

  btn.addEventListener('click', () => {
    alert('jo');
    /*fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(result => result.json())
      .then(result => {meals});*/
  });

  return [header, main];
}
