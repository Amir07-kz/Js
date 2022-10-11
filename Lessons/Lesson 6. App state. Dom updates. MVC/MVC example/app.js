import watchState from './watchers';

const app = () => {
    const state = {
        todos: [],
        form: {
            processState: 'finished',
            fields: {
                newToDo: '',
            },
        },
    };

    const input = document.querySelector('.to-do__input');
    const form = document.querySelector('.to-do__form');

    input.addEventListener('input', (e) => {
        state.form.processState = 'filling';
        
        state.form.fields.newToDo = e.target.value;
        
        input.disabled = false;
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        state.form.processState = 'adding';
        // что-то еще
        state.todos.push(state.form.fields.newToDo);
    });

    watchState(state); // Отслеживаем изменения состояния
};

export default app;