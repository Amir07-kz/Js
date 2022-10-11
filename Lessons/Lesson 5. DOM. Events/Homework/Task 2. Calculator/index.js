const TYPES = {
    DIGIT: 'digit',
    PLUS: 'plus',
    RESULT: 'result',
    RESET: 'reset',
};

const ADDITIONAL_BUTTONS = [
    {
        text: '+',
        type: TYPES.PLUS,
    },
    {
        text: '=',
        type: TYPES.RESULT,
    },
    {
        text: 'Сбросить',
        type: TYPES.RESET,
    },
];

function createElement (tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}


const createButtons = () => {
    const buttons = [];
    for (let i = 0; i < 10; i++) {
        const button = createElement("button", i);
        button.setAttribute("data-type", TYPES.DIGIT);
        buttons.push(button);
    }
    ADDITIONAL_BUTTONS
        .forEach(value =>
        {
            const button = createElement("button", value.text);
            button.setAttribute("data-type", value.type);
            buttons.push(button);
        });

    return buttons;
}

const addEcnListener = (buttons, view, result) => {
    buttons.forEach((b) => {
        const data_type = b.getAttribute("data-type");
        b.addEventListener("click", () => {
            if (data_type === "reset") {
                result.textContent = 0
                view.textContent = "";
            }
            if (data_type === "result" || data_type === "plus") result.textContent = view.textContent.split("+").reduce((p, c) => +p + (+c), 0)
            if (data_type === "digit" || data_type === "plus") view.textContent += b.textContent;
        })
    })
}

const setCalculator = () => {
    const container = document.querySelector(".calc__buttons");
    const calc__main = document.querySelector(".calc__main");
    const calc__result = document.querySelector(".calc__result");
    const respText = createElement("span", "Результат: ");
    const resp = createElement("span", 0);
    resp.setAttribute("class", "calc__result-number");
    const buttons = createButtons();
    calc__result.append(respText, resp)
    addEcnListener(buttons, calc__main, resp);
    container.append(...buttons);
};

module.exports = setCalculator;