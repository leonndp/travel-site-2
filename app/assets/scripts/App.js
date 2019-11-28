import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu.js';

const mobileMenu = new MobileMenu();

if(module.hot) {
    module.hot.accept();
}


