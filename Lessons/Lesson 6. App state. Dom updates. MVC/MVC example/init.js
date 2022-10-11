const getContainer = () => {
    const container = document.createElement('div');

    const header = document.createElement('div');
    const main = document.createElement('div');
    const footer = document.createElement('footer');

    main.classList.add('main');
    footer.innerHTML = 'Welcome to my Github <ссылка>';
    /* some code */

    return container;
};

// Connecting parts of the site to the "body"-element in DOM
export default () => {
    const body = document.body;
    const toDoContainer = getContainer();
    body.append(toDoContainer);
};