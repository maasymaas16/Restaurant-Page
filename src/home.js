function displayHome() {
    const header = document.createElement('div');
    header.classList.add('header');

    const content = document.createElement('div');
    content.classList.add('content');

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
    home.setAttribute('id', 'home');
    home.innerHTML = 'Home';

    const menu = document.createElement('div');
    menu.classList.add('tab');
    menu.setAttribute('id', 'menu');
    menu.innerHTML = 'Menu';

    const contact = document.createElement('div');
    contact.classList.add('tab');
    contact.setAttribute('id', 'contact');
    contact.innerHTML = 'Contact Us';

    const description = document.createElement('p');
    description.classList.add('description');
    description.innerHTML = 'Welcome to Yum-Yum Exotic Foods! Here you\'ll find foods you never thought existed, and tastes you can\'t get enough of!'

    const pic =  document.createElement('img');
    pic.src = "/home/maasymaas16/repos/Restaurant-Page/src/restaurant.jpg"
    pic.classList.add('home-pic');


    tabcont.appendChild(home);
    tabcont.appendChild(menu);
    tabcont.appendChild(contact);

    headerInfo.appendChild(name);
    headerInfo.appendChild(tabcont);
    header.appendChild(headerInfo);

    content.appendChild(description);
    content.appendChild(pic);

    document.body.appendChild(header);
    document.body.appendChild(content);
    document.body.appendChild(footer);

};

export default displayHome;