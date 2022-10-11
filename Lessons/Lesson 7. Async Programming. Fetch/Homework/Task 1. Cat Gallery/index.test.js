cd JS-Course-Public
/**
 * @jest-environment jsdom
 */
const setCatGallery = require('./index');

describe('h.7.1 setCatGallery', () => {
    document.body.innerHTML = '<div class="main">\n' +
        '    <h1>Котогалерея</h1>\n' +
        '    <div class="main__container"></div>\n' +
        '</div>';

    const container = document.querySelector('.main__container');

    it('h.7.1.1 function works correct', () => {
        return setCatGallery().then((text) => {
            const correctText = 'cat gallery is ready!';
            expect(text).toBe(correctText);

            const images = container.querySelectorAll('img');
            const imagesCount = [ ...images ].length;
            expect(imagesCount).toBe(10);

            const imagesSources = [ ...images ].map((el) => el.src);
            const areImagesHaveCorrectSource = imagesSources
                .every((src) => src.includes('https://cdn2.thecatapi.com/images/'));

            expect(areImagesHaveCorrectSource).toBeTruthy();
        });
    });
});
