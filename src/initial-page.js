function createHeader(className) {
    const header = document.createElement('header');
    header.className = className;
    header.textContent = 'Just another pizza restaurant';
    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    const navList = document.createElement('ul');
    const pageModules = ['home', 'menu', 'contact'];

    for (let i = 0; i < pageModules.length; i++) {
        const singleModule = document.createElement('li');
        singleModule.setAttribute('id', pageModules[i]);
        singleModule.textContent = pageModules[i];
        navList.appendChild(singleModule);
    }
    
    nav.appendChild(navList);
    return nav;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.textContent = 'Created by ';
    return footer;    
}

function loadInitialPage(module) {
    const content = document.querySelector('#content');
    const tabConetnt = document.createElement('div');

    tabConetnt.className = 'tab';
    content.appendChild(createHeader('header'));
    content.appendChild(createNav());
    content.appendChild(tabConetnt)
    tabConetnt.appendChild(module);
    content.appendChild(createFooter());
}

export {loadInitialPage}