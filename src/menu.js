function displayMenu() {
    // Display Main Page Structure
    const header = document.createElement('div');
    header.classList.add('header');

    const content = document.createElement('div');
    content.classList.add('content');
    content.setAttribute('id', 'menuContent');

    const footer = document.createElement('div');
    footer.classList.add('footer');

    const headerInfo = document.createElement('div');
    headerInfo.classList.add('headerInfo');

    const name = document.createElement('div');
    name.classList.add('name')
    name.innerHTML = "Yum-Yum Exotic Foods"

    const tabcont = document.createElement('div');
    tabcont.classList.add('tabcont');

    const home = document.createElement('div');
    home.classList.add('tab');
    home.innerHTML = 'Home';

    const menu = document.createElement('div');
    menu.classList.add('tab');
    menu.setAttribute('id', 'menu');
    menu.innerHTML = 'Menu';

    const contact = document.createElement('div');
    contact.classList.add('tab');
    contact.innerHTML = 'Contact Us';

    tabcont.appendChild(home);
    tabcont.appendChild(menu);
    tabcont.appendChild(contact);

    headerInfo.appendChild(name);
    headerInfo.appendChild(tabcont);
    header.appendChild(headerInfo);

    document.body.appendChild(header);
    document.body.appendChild(content);
    document.body.appendChild(footer);

    // Display Menu specific content
    for( let i = 0; i <6; i++){
       var menuItem = document.createElement('div');
       menuItem.setAttribute('id', 'menu-item' + i);
       content.appendChild(menuItem);
    }

    const m0 = document.getElementById('menu-item0');
    const m1 = document.getElementById('menu-item1');
    const m2 = document.getElementById('menu-item2');
    const m3 = document.getElementById('menu-item3');
    const m4 = document.getElementById('menu-item4');
    const m5 = document.getElementById('menu-item5');

    // Menu Pictures
    const img0 = document.createElement('img');
    img0.classList.add('menu-pic');
    img0.src = "/home/maasymaas16/repos/Restaurant-Page/src/tarantula.jpg"

    const img1 = document.createElement('img');
    img1.classList.add('menu-pic');
    img1.src = "/home/maasymaas16/repos/Restaurant-Page/src/chicken-feet.jpg"

    const img2 = document.createElement('img');
    img2.classList.add('menu-pic');
    img2.src = "/home/maasymaas16/repos/Restaurant-Page/src/oyster.jpg"

    const img3 = document.createElement('img');
    img3.classList.add('menu-pic');
    img3.src = "/home/maasymaas16/repos/Restaurant-Page/src/turducken.jpg"

    const img4 = document.createElement('img');
    img4.classList.add('menu-pic');
    img4.src = "/home/maasymaas16/repos/Restaurant-Page/src/frog.jpg"

    const img5 = document.createElement('img');
    img5.classList.add('menu-pic');
    img5.src = "/home/maasymaas16/repos/Restaurant-Page/src/geoduck.jpg"

    // Menu dish names
    const desc0 = document.createElement('div');
    desc0.classList.add('menuDesc');
    desc0.innerHTML = 'Deep Fried Tarantula';

    const desc1 = document.createElement('div');
    desc1.classList.add('menuDesc');
    desc1.innerHTML = 'Chicken Feet';

    const desc2 = document.createElement('div');
    desc2.classList.add('menuDesc');
    desc2.innerHTML = 'Rocky Mountain Oysters';

    const desc3 = document.createElement('div');
    desc3.classList.add('menuDesc');
    desc3.innerHTML = 'Turducken';

    const desc4 = document.createElement('div');
    desc4.classList.add('menuDesc');
    desc4.innerHTML = 'Frog Legs';

    const desc5 = document.createElement('div');
    desc5.classList.add('menuDesc');
    desc5.innerHTML = 'Geoduck';

    // Menu Dish Prices
    const price0 = document.createElement('div');
    price0.classList.add('price');
    price0.innerHTML = "$24.95"

    const price1 = document.createElement('div');
    price1.classList.add('price');
    price1.innerHTML = "$21.99"

    const price2 = document.createElement('div');
    price2.classList.add('price');
    price2.innerHTML = "$19.95"

    const price3 = document.createElement('div');
    price3.classList.add('price');
    price3.innerHTML = "$32.99"

    const price4 = document.createElement('div');
    price4.classList.add('price');
    price4.innerHTML = "$28.99"

    const price5 = document.createElement('div');
    price5.classList.add('price');
    price5.innerHTML = "$41.99"

    m0.appendChild(img0);
    m0.appendChild(desc0);
    m0.appendChild(price0);
    m1.appendChild(img1);
    m1.appendChild(desc1);
    m1.appendChild(price1);
    m2.appendChild(img2);
    m2.appendChild(desc2);
    m2.appendChild(price2);
    m3.appendChild(img3);
    m3.appendChild(desc3);
    m3.appendChild(price3);
    m4.appendChild(img4);
    m4.appendChild(desc4);
    m4.appendChild(price4);
    m5.appendChild(img5);
    m5.appendChild(desc5);
    m5.appendChild(price5);


    content.appendChild(m0);
    content.appendChild(m1);
    content.appendChild(m2);
    content.appendChild(m3);
    content.appendChild(m4);
    content.appendChild(m5);
    
};

export default displayMenu;