import displayHome from './home.js';
import displayMenu from './menu.js';

displayHome();

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'menu'){
        document.body.innerHTML = '';
        displayMenu();
     }
 });