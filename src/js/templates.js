import Template from '../template/menu-items.hbs';
import menu from '../menu.json';

const galleryRef = document.querySelector('.js-menu');
const markup = Template(menu);
galleryRef.insertAdjacentHTML('beforeend', markup);