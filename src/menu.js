export {createMenu}

function createMenu() {
    const div = document.createElement('div');
    const header = document.createElement('h3');

    div.className = 'menu';
    header.textContent = 'MENU';
    div.appendChild(header);
    for (let i = 0; i < 4; i++) {
        const img = document.createElement('img');
        div.appendChild(img);
    }

    return div;
}