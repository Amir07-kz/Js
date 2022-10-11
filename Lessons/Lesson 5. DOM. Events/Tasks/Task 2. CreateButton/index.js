const createButton = () => {
    // Начало
    const button = document.createElement('button');
    button.textContent = 'Кнопка';

    const container = document.querySelector('.container');
    container.append(button);

    const description = document.querySelector('.description');

    button.addEventListener('click', (event)=>{
        const newbutton = document.createElement('span');
        newbutton.textContent = 'Текст вставлен!';
        description.append(newbutton);
    })
    // Конец
};

module.exports = createButton;