import { expect } from 'chai';
import main from '../src/index';

describe('des', () => {
  it('should pass', () => {
    expect(main()).to.equal('ah')
  })
})
