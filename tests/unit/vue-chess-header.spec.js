import { shallowMount } from '@vue/test-utils'
import VueChessHeader from '@/components/vue-chess-header.vue'

describe('vue-chess-header.vue Test', () => {
  it('mounts correctly', () => {
    const wrapper = shallowMount(VueChessHeader);
    expect(wrapper.vm.$options.name).toMatch('vue-chess-header');
    expect(wrapper.vm.$options.methods).toEqual(expect.objectContaining({quickStartGame: expect.any(Function)}));
  })
})
