import { shallowMount } from '@vue/test-utils';
import CardsList from '@/components/cards-list/cards-list.vue';

describe('<CardsList />', () => {
  it('should be render the component', () => {
    const titleText = 'Choose your Card:';
    const wrapper = shallowMount(CardsList);
    expect(wrapper.text()).toMatch(titleText);
  });
});
