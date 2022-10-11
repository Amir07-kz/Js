const setToDo = () => {
    // Начало
    const toDoMain = document.querySelector('.to-do__main');
    toDoMain.innerHTML = '<input type="text" placeholder="Введите наименование задачи"/> <button>Добавить в план</button> <button>Добавить в сделанные</button>';

    const buttonCollection = document.querySelectorAll('button');
    const toDoTasks = document.querySelector('.to-do__tasks');
    buttonCollection[0].addEventListener('click', (event) =>{
        toDoTasks.insertAdjacentHTML('beforeend',`<span>${document.getElementsByTagName("input")[0].value}</span>`);
        const spansElements = document.querySelectorAll('span');
        spansElements[spansElements.length-1].dataset.type = 'planned';
        document.querySelector("input").value = "";
    })

    buttonCollection[1].addEventListener('click', (event) =>{
        toDoTasks.insertAdjacentHTML('beforeend',`<span>${document.getElementsByTagName("input")[0].value}</span>`);
        const spansElements = document.querySelectorAll('span');
        spansElements[spansElements.length-1].dataset.type = 'completed';
        document.querySelector("input").value = "";
    })

    toDoTasks.addEventListener('click',  (event) => {
        let target = event.target;
        target.remove();
    })
    // Конец
};

module.exports = setToDo;