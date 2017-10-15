import { expect } from 'chai';
import store from '../../src/store';
import * as actions from '../../src/actions';
import { dispatchActionPromise } from '../support/redux_helpers';

describe('setValue', () => {
  it('should set the value in the store', (done) => {
    const action = actions.setValue('name', 'Josey');
    dispatchActionPromise(store, action).then(() => {
      expect(store.getState().get('name')).to.equal('Josey');
      done();
    });
  });

  it('should set a deep value in the store', (done) => {
    const action = actions.setValue(['mother', 'name'], 'Sabrina');
    dispatchActionPromise(store, action).then(() => {
      expect(store.getState().getIn(['mother', 'name'])).to.equal('Sabrina');
      done();
    });
  });
});
