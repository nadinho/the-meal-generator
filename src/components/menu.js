import { createElement } from '../lib/dom';

export function createMenu() {
  const menuSection = createElement('section', {
    className: 'menu'
  });
  return menuSection;
}
