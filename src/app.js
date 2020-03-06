import './app.scss';
import { createElement, appendContent } from './lib/dom';
import { title } from './components/title';
import {
  createHeading,
  createParagraph,
  createButton
} from './components/container';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });

  const titleElement = title('Meal Generator');
  const heading = createHeading('What should I eat today?');
  const paragraph = createParagraph(`You're hungry and need menu suggestions?
  Just click this button and get a very delicious recipe!`);
  const btn = createButton('→ Get recipe');

  appendContent(header, titleElement);
  appendContent(main, [heading, paragraph, btn]);

  return [header, main];
}
