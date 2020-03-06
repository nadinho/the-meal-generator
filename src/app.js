import './app.scss';
import { createElement } from './lib/dom';
import { title } from './components/title';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const titleElement = title('Meal Generator');
  //const container = container;

  header.appendChild(titleElement);
  //main.appendChild(container);

  return [header, main];
}
