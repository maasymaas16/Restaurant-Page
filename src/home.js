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
    home.innerHTML = 'Home';

    const menu = document.createElement('div');
    menu.classList.add('tab');
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

};

export default displayHome;