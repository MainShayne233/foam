import { expect } from 'chai';
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import 'jsdom-global/register'
import Foam from '../src';
Enzyme.configure({ adapter: new Adapter() });

const DATA_STRUCTURE = {
  first_name: String,
};

const FoamWrapper = Enzyme.mount(
  <Foam
    dataStructure={DATA_STRUCTURE}
  />
);

describe('Foam', () => {
  it('should render a form for a valid data structure', () => {
  });
});
