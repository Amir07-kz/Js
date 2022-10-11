/**
 * @jest-environment jsdom
 */

const { mount } = require("@vue/test-utils");
const ItisIcon = require("./ItisIcon.vue");

describe("c.11.2 ItisIcon", () => {
    const wrapper = mount(ItisIcon.default);
    expect(wrapper.element).toMatchSnapshot();

    it("c.11.2.2 ItisIcon is a Vue instance", () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it("c.11.2.3 change prop 'icon-type' to 'excited'", async () => {
        await wrapper.setProps({ iconType: 'excited' });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("c.11.2.4 change prop 'icon-type' to 'loved'", async () => {
        await wrapper.setProps({ iconType: 'loved' });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("c.11.2.5 change prop 'icon-type' to 'happy'", async () => {
        await wrapper.setProps({ iconType: 'happy' });
        expect(wrapper.element).toMatchSnapshot();
    });
});
