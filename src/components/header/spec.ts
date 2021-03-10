import { shallowMount } from '@vue/test-utils';
import Header from '@/components/header/header.vue';

describe('Header.vue', () => {
  it('renders title from header', () => {
    const text = 'Planning Card Pocker';
    const wrapper = shallowMount(Header);
    expect(wrapper.text()).toMatch(text);
  });
});
