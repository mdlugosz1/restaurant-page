export {createContact}

function createContact() {
    const div = document.createElement('div');
    const form = document.createElement('form');
    const header = document.createElement('h3');

    div.className = 'contact';
    header.textContent = 'Contact us';
    form.textContent = 'Here';
    div.appendChild(header);
    div.appendChild(form);

    return div;
}