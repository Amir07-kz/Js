const   LIGHTS = {
    red: {
        type: 'red',
        text: 'Красный',
    },
    yellow: {
        type: 'yellow',
        text: 'Желтый',
    },
    green: {
        type: 'green',
        text: 'Зеленый',
    },
};

const setTrafficLight = () => {
    // Начало
    const trafficLights = document.querySelector('.traffic__lights');
    const trafficLightsContainer = document.createElement('div');
    trafficLightsContainer.classList.add('traffic__lights-container');
    trafficLightsContainer.insertAdjacentHTML('beforeend',
        '<span class="red-light"></span>' +
        '<span></span>' +
        '<span></span>');
    trafficLights.append(trafficLightsContainer);

    const trafficLightsSelect = document.querySelector('.traffic__lights-select');
    const select = document.createElement('select')
    select.insertAdjacentHTML('beforeend',
        '<option value="red">Красный</option>' +
        '<option value="yellow">Желтый</option>' +
        '<option value="green">Зеленый</option>');
    trafficLightsSelect.append(select);

    select.addEventListener('change', (event) =>{
        if(event.target.value === 'red'){
            trafficLightsContainer.innerHTML = '<span class="red-light"></span><span></span><span></span>'
        }
        else if(event.target.value === 'yellow'){
            trafficLightsContainer.innerHTML = '<span></span><span class="yellow-light" ></span><span></span>'
        }
        else if(event.target.value === 'green'){
            trafficLightsContainer.innerHTML = '<span></span><span></span><span class="green-light"></span>'
        }
    })
    // Конец
};

module.exports = setTrafficLight;