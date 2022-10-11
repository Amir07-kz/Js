/**
 * @jest-environment jsdom
 */

const { mount } = require("@vue/test-utils");
const TheSun = require("./TheSun.vue");

describe("c.11.1 TheSun", () => {
    const wrapper = mount(TheSun.default);
    expect(wrapper.element).toMatchSnapshot();

    it("c.11.1.1 TheSun has data", () => {
        expect(typeof TheSun.default.data).toBe("function");
    });

    it("c.11.1.2 TheSun is a Vue instance", () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it("c.11.1.3 click on the sun once", async () => {
        const sunImg = wrapper.find('.sun-container__the-sun');
        await sunImg.trigger("click");
        expect(wrapper.element).toMatchSnapshot();
    });

    it("c.11.1.4 click on the two more times", async () => {
        const sunImg = wrapper.find('.sun-container__the-sun');
        await sunImg.trigger("click");
        await sunImg.trigger("click");
        expect(wrapper.element).toMatchSnapshot();
    });

    it("c.11.1.5 click on the sun one more time", async () => {
        const sunImg = wrapper.find('.sun-container__the-sun');
        await sunImg.trigger("click");
        expect(wrapper.element).toMatchSnapshot();
    });
});
