import { shallowMount } from '@vue/test-utils'
import VueChessHeader from '@/components/vue-chess-header.vue'

describe('vue-chess-header.vue Test', () => {
    it('mounts correctly', () => {
    const wrapper = shallowMount(VueChessHeader);
    expect(wrapper.vm.$options.name).toMatch('vue-chess-header');
    expect(wrapper.vm.$options.methods).toEqual(expect.objectContaining({quickStartGame: expect.any(Function)}));
    expect(wrapper.vm.$data.isQuickStartBtnDisabled).toBe(false);
    expect(wrapper.vm.$data.isAdvancedConfigBtnDisabled).toBe(false);
    });

    it('calls quickStartGame function when quickStartBtn is clicked', async () => {
    const spyQuickStartGame = jest.spyOn(VueChessHeader.methods, "quickStartGame");
    const wrapper = shallowMount(VueChessHeader);
    await wrapper.find('#quickStartBtn').trigger('click');
    expect(spyQuickStartGame).toHaveBeenCalled();
    });

    it('emits "quickStartGame" event when quickStartBtn is clicked', async () => {
        const wrapper = shallowMount(VueChessHeader);
        await wrapper.find('#quickStartBtn').trigger('click');
        expect(wrapper.emitted().quickStartGame).toBeTruthy()
    });

    it('disables buttons when quickStartBtn is clicked', async () => {
        const wrapper = shallowMount(VueChessHeader);
        await wrapper.find('#quickStartBtn').trigger('click');
        expect(wrapper.vm.$data.isQuickStartBtnDisabled).toBe(true);
        expect(wrapper.vm.$data.isAdvancedConfigBtnDisabled).toBe(true);
    });
})
