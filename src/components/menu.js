import { createElement } from '../lib/dom';

async function fetchMenu() {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/random.php'
  );
  const results = await response.json();
  const recipe = results.meals[0];

  console.log(recipe);
}

export function fetchDataCreateMenu() {
  const menuSection = createElement('section', {
    className: 'menu'
  });
  fetchMenu();
  return menuSection;
}
