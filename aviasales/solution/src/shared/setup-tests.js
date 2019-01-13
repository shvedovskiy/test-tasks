import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

// Fail tests on any warning
/* eslint-disable-next-line no-console */
console.error = message => {
  throw new Error(message);
};
