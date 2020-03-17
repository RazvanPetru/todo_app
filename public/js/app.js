const input = document.getElementById('input');
const add = document.getElementById('add');
const clear = document.getElementById('clear');
const list = document.getElementById('list');

function addElement() {
    let value = input.value;
    if (value === '') {
        return;
    }
    input.value = '';

    const item = document.createElement('li');
    item.className = 'list__item';
    list.append(item);

    const circle = document.createElement('span');
    circle.className = 'list__circle';
    item.append(circle);

    const text = document.createElement('div');
    text.className = 'list__text';
    text.innerHTML = value;
    item.append(text);

    deleteElement();
    getSaved();
};

function deleteElement() {
    const listItems = document.querySelectorAll('.list__item');
    for (let element of listItems) {
        element.addEventListener('click', () => element.remove());
    }
};

input.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13;
    if (keyPressed.keyCode == keyEnter) {
        addElement();
    }
});

clear.addEventListener('click', () => {
    localStorage.removeItem('list', list.innerHTML = '');
});

function getSaved() {
    localStorage.setItem('list', list.innerHTML);
}

function loadTodos() {
    const data = localStorage.getItem('list');
    list.innerHTML = data;
    deleteElement();
};

loadTodos();