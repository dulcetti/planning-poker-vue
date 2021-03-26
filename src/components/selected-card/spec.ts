import { shallowMount } from '@vue/test-utils';
import SelectedCard from '@/components/selected-card/selected-card.vue';
import Card from '@/components/card/card.vue';

describe('<SelectedCard />', () => {
  it('should be render the component', () => {
    const wrapper = shallowMount(SelectedCard);

    expect(wrapper.text()).toContain('Your card:');
  });
});
