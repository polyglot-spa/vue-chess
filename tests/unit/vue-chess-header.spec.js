import { shallowMount } from '@vue/test-utils'
import VueChessHeader from '@/components/vue-chess-header.vue'

describe('vue-chess-header.vue Test', () => {
    it('mounts correctly', () => {
        const wrapper = shallowMount(VueChessHeader);
        expect(wrapper.vm.$options.name).toMatch('vue-chess-header');
        expect(wrapper.vm.$options.methods).toEqual(expect.objectContaining({quickStartGame: expect.any(Function)}));
        expect(wrapper.vm.$options.methods).toEqual(expect.objectContaining({showAdvancedConfigModal: expect.any(Function)}));
        expect(wrapper.vm.$options.methods).toEqual(expect.objectContaining({disableButtons: expect.any(Function)}));
        expect(wrapper.vm.$data.isQuickStartBtnDisabled).toBe(false);
        expect(wrapper.vm.$data.isAdvancedConfigBtnDisabled).toBe(false);
    });

    it('calls quickStartGame function when quickStartBtn is clicked', async () => {
        const spyQuickStartGame = jest.spyOn(VueChessHeader.methods, "quickStartGame");
        const wrapper = shallowMount(VueChessHeader);
        await wrapper.find('#quickStartBtn').trigger('click');
        expect(spyQuickStartGame).toHaveBeenCalled();
    });

    it('calls showAdvancedConfigModal function when showAdvancedConfigModal is clicked', async () => {
        const spyShowAdvancedConfigModal = jest.spyOn(VueChessHeader.methods, "showAdvancedConfigModal");
        const wrapper = shallowMount(VueChessHeader);
        await wrapper.find('#advancedConfigBtn').trigger('click');
        expect(spyShowAdvancedConfigModal).toHaveBeenCalled();
    });

    it('emits "quickStartGame" event when quickStartBtn is clicked', async () => {
        const wrapper = shallowMount(VueChessHeader);
        await wrapper.find('#quickStartBtn').trigger('click');
        expect(wrapper.emitted().quickStartGame).toBeTruthy();
    });

    it('emits "showAdvancedConfigModal" event when quickStartBtn is clicked', async () => {
        const wrapper = shallowMount(VueChessHeader);
        await wrapper.find('#advancedConfigBtn').trigger('click');
        expect(wrapper.emitted().showAdvancedConfigModal).toBeTruthy();
    });

    it('disables buttons when quickStartBtn is clicked', async () => {
        const wrapper = shallowMount(VueChessHeader);
        await wrapper.find('#quickStartBtn').trigger('click');
        expect(wrapper.vm.$data.isQuickStartBtnDisabled).toBe(true);
        expect(wrapper.vm.$data.isAdvancedConfigBtnDisabled).toBe(true);
    });

    it('disables buttons when advancedConfigBtn is clicked', async () => {
        const wrapper = shallowMount(VueChessHeader);
        await wrapper.find('#advancedConfigBtn').trigger('click');
        expect(wrapper.vm.$data.isQuickStartBtnDisabled).toBe(true);
        expect(wrapper.vm.$data.isAdvancedConfigBtnDisabled).toBe(true);
    });
})
