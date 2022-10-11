const runClocks = () => {
    // Начало
    function addRotate(element, degre)
    {
        element.style.transform = rotate(degre);
    }

    function rotate(degree)
    {
        return `rotate(${degree}deg)`;
    }

    setInterval(()=>{
        const date = new Date();
        addRotate(document.querySelector(".clocks__second"), 6 * date.getSeconds());
        addRotate(document.querySelector(".clocks__minute"), 6 * date.getMinutes());
        addRotate(document.querySelector(".clocks__hour"), 30 * date.getHours());
    }, 1000);
    // Конец
};