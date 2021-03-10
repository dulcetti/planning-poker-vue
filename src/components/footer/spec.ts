import { shallowMount } from '@vue/test-utils';
import Footer from '@/components/footer/footer.vue';

describe('<Footer />', () => {
  it('renders props.msg when passed', () => {
    const footerText = 'Background vector created by vectorpouch - www.freepik.com';
    const wrapper = shallowMount(Footer);
    expect(wrapper.text()).toMatch(footerText);
  });
});
