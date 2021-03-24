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

  it('should be choose a card when clicked', async () => {
    const cardValue = 10;
    const wrapper = shallowMount(Card, {
      props: { value: cardValue },
    });
    await wrapper.trigger('click');
    wrapper.vm.$emit('value', 10);

    expect(wrapper.emitted().value).toBeTruthy();
    expect(wrapper.emitted().value[0]).toEqual([10]);
  });
});
