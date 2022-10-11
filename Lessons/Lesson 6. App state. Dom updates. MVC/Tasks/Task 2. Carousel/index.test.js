/**
 * @jest-environment jsdom
 */
const setCarousel = require('./index');

const checkAreElementsActive = (elements) => [ ...elements ].map((el) => el.classList.contains('active'));

describe('c.6.2 carousel', () => {
    document.body.innerHTML = '<div class="main">\n' +
        '    <div class="carousel carousel-dark slide">\n' +
        '        <div class="carousel-inner"></div>\n' +
        '        <button class="carousel-control-prev" type="button" data-bs-slide="prev">\n' +
        '            <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n' +
        '        </button>\n' +
        '        <button class="carousel-control-next" type="button" data-bs-slide="next">\n' +
        '            <span class="carousel-control-next-icon" aria-hidden="true"></span>\n' +
        '        </button>\n' +
        '    </div>\n' +
        '</div>';

    setCarousel([
        '../../../../Resources/images/carousel-images/carousel-1.jpg',
        '../../../../Resources/images/carousel-images/carousel-2.jpg',
        '../../../../Resources/images/carousel-images/carousel-3.jpg',
    ]);

    const carouselInner = document.querySelector('.carousel-inner');
    const nextButton = document.querySelector('.carousel-control-next');
    const prevButton = document.querySelector('.carousel-control-prev');

    it('c.6.2.1 all images has been added', () => {
        const imageDivs = carouselInner.querySelectorAll('.carousel-item');
        const amountOfDivs = [ ...imageDivs ].length;
        expect(amountOfDivs).toBe(3);

        const images = carouselInner.querySelectorAll('img');
        const amountOfImages = [ ...images ].length;
        expect(amountOfImages).toBe(3);
    });

    const imageDivs = carouselInner.querySelectorAll('.carousel-item');

    it('c.6.2.2 first div has "active" class and other divs have not', () => {
        const activesArray = checkAreElementsActive(imageDivs);

        const hasFirstDivActiveClass = activesArray[0];
        expect(hasFirstDivActiveClass).toBeTruthy();

        const hasSecondDivActiveClass = activesArray[1];
        expect(hasSecondDivActiveClass).toBeFalsy();

        const hasThirdDivActiveClass = activesArray[2];
        expect(hasThirdDivActiveClass).toBeFalsy();
    });

    it('c.6.2.3 press two times to next button', () => {
        nextButton.click();
        nextButton.click();

        const activesArray = checkAreElementsActive(imageDivs);

        const hasFirstDivActiveClass = activesArray[0];
        expect(hasFirstDivActiveClass).toBeFalsy();

        const hasSecondDivActiveClass = activesArray[1];
        expect(hasSecondDivActiveClass).toBeFalsy();

        const hasThirdDivActiveClass = activesArray[2];
        expect(hasThirdDivActiveClass).toBeTruthy();
    });

    it('c.6.2.4 press next button two more times', () => {
        nextButton.click();
        nextButton.click();

        const activesArray = checkAreElementsActive(imageDivs);

        const hasFirstDivActiveClass = activesArray[0];
        expect(hasFirstDivActiveClass).toBeFalsy();

        const hasSecondDivActiveClass = activesArray[1];
        expect(hasSecondDivActiveClass).toBeTruthy();

        const hasThirdDivActiveClass = activesArray[2];
        expect(hasThirdDivActiveClass).toBeFalsy();
    });

    it('c.6.2.5 press prev button two times', () => {
        prevButton.click();
        prevButton.click();

        const activesArray = checkAreElementsActive(imageDivs);

        const hasFirstDivActiveClass = activesArray[0];
        expect(hasFirstDivActiveClass).toBeFalsy();

        const hasSecondDivActiveClass = activesArray[1];
        expect(hasSecondDivActiveClass).toBeFalsy();

        const hasThirdDivActiveClass = activesArray[2];
        expect(hasThirdDivActiveClass).toBeTruthy();
    });
});
