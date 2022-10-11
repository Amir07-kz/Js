/**
 * @jest-environment jsdom
 */

const { mount } = require("@vue/test-utils");
const Satellite = require("./Satellite.vue");

describe("c.9.1 Satellite", () => {
    const wrapper = mount(Satellite.default);
    expect(wrapper.element).toMatchSnapshot();

    it("c.9.1.1 Satellite has data", () => {
        expect(typeof Satellite.default.data).toBe("function");
    });

    it("c.9.1.2 Satellite is a Vue instance", () => {
        expect(wrapper.vm).toBeTruthy();
    });

    const input = wrapper.find('.form-control');

    it("c.9.1.3 with radius 42000k", async () => {
        input.element.value = 42000;
        await input.trigger("input");
        expect(wrapper.element).toMatchSnapshot();
    });

    it("c.9.1.4 with radius 101010k", async () => {
        input.element.value = 101010;
        await input.trigger("input");
        expect(wrapper.element).toMatchSnapshot();
    });

    it("c.9.1.5 with radius 7400k", async () => {
        input.element.value = 7400;
        await input.trigger("input");
        expect(wrapper.element).toMatchSnapshot();
    });
});
