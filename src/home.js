function createHomeContent() {
    const para = document.createElement('p');
    const div = document.createElement('div');
    para.textContent = 'Blabla bla bla Blabla bla bla Blabla bla bla Blabla bla bla Blabla bla bla Blabla bla bla';
    div.setAttribute('class', 'home');
    div.appendChild(para);
    return div;
}

export {createHomeContent}