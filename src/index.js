import displayHome from './home.js';
import displayMenu from './menu.js';
import displayContact from './contact.js';

displayHome();

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'menu'){
        document.body.innerHTML = '';
        displayMenu();
     }
 });

 document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'contact'){
        document.body.innerHTML = '';
        displayContact();
     }
 });

 document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'home'){
        document.body.innerHTML = '';
        displayHome();
     }
 });