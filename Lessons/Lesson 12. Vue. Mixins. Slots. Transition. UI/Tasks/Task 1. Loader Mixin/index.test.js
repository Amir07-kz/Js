/**
 * @jest-environment jsdom
 */

const { mount } = require("@vue/test-utils");
const TestComponent = require("./test-components/TestComponent.vue");
const loaderMixin = require("./loaderMixin.js");

describe("c.12.1 loaderMixin", () => {
    const wrapper = mount(TestComponent.default, {
        mixins: [ loaderMixin ],
    });

    it("c.12.1.1 press start button", async () => {
        const button = wrapper.find('.btn--start-loading');
        await button.trigger("click");
        expect(wrapper.find('.loader').exists()).toBe(true);
    });

    it("c.12.1.2 press finish button", async () => {
        const button = wrapper.find('.btn--finish-loading');
        await button.trigger("click");
        expect(wrapper.find('.loader').exists()).toBe(false);
    });
});
