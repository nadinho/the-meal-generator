import './container.scss';
import { createElement } from '../lib/dom';

export function createHeading(text) {
  const heading = createElement('h2', {
    innerText: text,
    className: 'h2'
  });
  return heading;
}

export function createParagraph(text) {
  const paragraph = createElement('p', {
    innerText: text,
    className: 'p'
  });
  return paragraph;
}

export function createButton(text) {
  const btn = createElement('button', {
    innerHTML: text,
    className: 'btn'
  });
  return btn;
}
