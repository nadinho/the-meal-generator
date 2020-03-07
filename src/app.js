import './app.scss';
import { createElement, appendContent } from './lib/dom';
import { title } from './components/title';
import {
  createHeading,
  createParagraph,
  createButton
} from './components/container';
import Logo from './assets/butterbrot.png';
import { fetchDataCreateMenu } from './components/menu';

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
  const menuSection = fetchDataCreateMenu();

  appendContent(header, [logo, titleElement]);
  appendContent(main, [heading, paragraph, btn]);

  btn.addEventListener('click', () => {
    fetchDataCreateMenu();
  });

  return [header, main, menuSection];
}
