let todolist = [];
const todolistNode = document.querySelector('.js_todolist');
const inputNode = document.querySelector('.js_input');
const btnNode = document.querySelector('.add_btn');

function add(text) {
    const todoitem = {
        text,
        status: false,
        id: `${Math.random()}`
    }
    todolist.push(todoitem);
};

function remove(id) {
    todolist.forEach(todoitem => {
        if (todoitem.id === id) {
            todoitem.status = true;
        };
    });
};

function output() {
    let html = '';
    todolist.forEach(todoitem => {
        if (todoitem.status === true) {
            return;
        };
        html +=
            `
            <div class="todoitem"><button class="done_btn" data-id='${todoitem.id}'></button>${todoitem.text}</<div>
        `;
    });
    todolistNode.innerHTML = html;
};

btnNode.addEventListener('click', () => {
    const text = inputNode.value;
    inputNode.placeholder = '';
    if (text === '') {
        inputNode.placeholder = 'Please type anything';
        return;
    };

    add(text);
    output();
    inputNode.value = '';
});

todolistNode.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') {
        return;
    };
    const id = event.target.dataset.id;
    remove(id);
    output();
});