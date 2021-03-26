import { shallowMount } from '@vue/test-utils';
import SelectedCard from '@/components/selected-card/selected-card.vue';
import Card from '@/components/card/card.vue';

describe('<SelectedCard />', () => {
  it('should be render the component', () => {
    const wrapper = shallowMount(SelectedCard);

    expect(wrapper.text()).toContain('Your card:');
  });

  it('should be render the card selected by user', async () => {
    const selectedValue = 100;
    const wrapper = shallowMount(SelectedCard);
    const cardWrapper = shallowMount(Card, {
      props: { value: selectedValue },
    });
    await cardWrapper.trigger('click');
    cardWrapper.vm.$emit('value', selectedValue);

    expect(wrapper.text()).toContain(`Your card: ${selectedValue}`);
  });
});
