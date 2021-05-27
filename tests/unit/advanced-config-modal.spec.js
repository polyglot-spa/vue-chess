import { shallowMount } from '@vue/test-utils'
import AdvancedConfigModal from '@/components/advanced-config-modal.vue'

describe('vue-chess-header.vue Test', () => {
    it('mounts correctly', () => {
        const wrapper = shallowMount(AdvancedConfigModal);
        expect(wrapper.vm.$options.name).toMatch('advanced-config-modal');
        expect(wrapper.vm.$options.methods).toEqual(expect.objectContaining({closeAdvancedConfigModal: expect.any(Function)}));
        expect(wrapper.vm.$options.methods).toEqual(expect.objectContaining({advancedConfigStartGame: expect.any(Function)}));
        expect(wrapper.vm.$data.color).toBe("White");
        expect(wrapper.vm.$data.fen).toBe("");
        expect(wrapper.vm.$data.selfPlay).toBe(false);
    });

    it('calls closeAdvancedConfigModal function when closeAdvancedConfigModalBtn is clicked', async () => {
        const spyCloseAdvancedConfigModal= jest.spyOn(AdvancedConfigModal.methods, "closeAdvancedConfigModal");
        const wrapper = shallowMount(AdvancedConfigModal);
        await wrapper.find('#closeAdvancedConfigModalBtn').trigger('click');
        expect(spyCloseAdvancedConfigModal).toHaveBeenCalled();
    });

    // it('calls advancedConfigStartGame function when advancedConfigStartGameBtn is clicked', async () => {
    //     const spyAdvancedConfigStartGame = jest.spyOn(AdvancedConfigModal.methods, "advancedConfigStartGame");
    //     const wrapper = shallowMount(AdvancedConfigModal);
    //     await wrapper.find('#advancedConfigStartGameBtn').trigger('click');
    //     expect(spyAdvancedConfigStartGame).toHaveBeenCalled();
    // });

    it('emits "closeAdvancedConfigModal" event when closeAdvancedConfigModalBtn is clicked', async () => {
        const wrapper = shallowMount(AdvancedConfigModal);
        await wrapper.find('#closeAdvancedConfigModalBtn').trigger('click');
        expect(wrapper.emitted().closeAdvancedConfigModal).toBeTruthy();
    });
})
