import { shallowMount } from '@vue/test-utils';
import Card from '@/components/card/card.vue';

describe('<Card />', () => {
  it('should be render the component', () => {
    const cardValue = 10;
    const wrapper = shallowMount(Card, {
      props: { value: cardValue },
    });
    expect(wrapper.text()).toContain(cardValue);
  });
});
