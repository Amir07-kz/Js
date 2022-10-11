import { watch } from 'melanke-watchjs';

const addToDo = (todos) => {
    const toDosDiv = document.querySelector('.to-do__elements-container');
    postsDiv.innerHTML = '';
    todos.forEach((todo) => {
        // appending todos to container
    });
};

const watchState = (state) => {
    const input = document.querySelector('.to-do__input');
    const form = document.querySelector('.to-do__form');
    const submitButton = form.querySelector('.to-do__form-button');

    watch(state.form, 'processState', () => {
        const { processState } = state.form;
        switch (processState) {
            case 'filling':
                submitButton.disabled = false;
                break;
            case 'adding':
                submitButton.disabled = true;
                break;

            // другие состояния
        }
    });

    watch(state, 'todos', () => {
        const todosElement = document.querySelector('.to-do__elements');
        todosElement.innerHTML = '';
        state.todos.forEach((todo) => {
            addToDo(todo);
        }
    });
};

export default watchState;