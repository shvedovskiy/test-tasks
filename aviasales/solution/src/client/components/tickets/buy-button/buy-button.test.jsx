/* eslint-disable no-undef */
import React from 'react';

import BuyButton from './buy-button';
import { BuyButtonContainer, BuyButtonText } from './styled';

describe('<BuyButton />', () => {
  const onBuyClick = jest.fn();
  let wrapper;
  let props;

  beforeAll(() => {
    props = {
      buyClick: onBuyClick,
      children: '1000 $',
    };
    wrapper = shallow(<BuyButton {...props} />);
  });

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('shows passed big price correctly', () => {
    wrapper.setProps({
      children: '1234567 €',
    });
    const price = wrapper
      .find(BuyButtonText)
      .children()
      .last()
      .text();
    expect(price).toBe('1 234 567 €');
  });

  it('calls onBuyClick after buton click', () => {
    wrapper.find(BuyButtonContainer).simulate('click');
    expect(onBuyClick).toHaveBeenCalled();
  });

  xit('has special color when hovered', () => {
    wrapper.find(BuyButtonContainer).simulate('mouseover');
    expect(wrapper).toHaveStyleRule('background-color', 'var(--brand-orange)');
  });
});
