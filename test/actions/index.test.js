import { expect } from 'chai';
import store from '../../src/store';
import * as actions from '../../src/actions';

describe('setValue', () => {
  it('should set the value in the store', (done) => {
    const unsubcribe = store.subscribe(() => {
      unsubcribe();
      expect(store.getState().get('name')).to.equal('Josey');
      done();
    });
    store.dispatch(actions.setValue('name', 'Josey'));
  });

  it('should set a deep value in the store', (done) => {
    const unsubcribe = store.subscribe(() => {
      unsubcribe();
      expect(store.getState().getIn(['mother', 'name'])).to.equal('Sabrina');
      done();
    });
    store.dispatch(actions.setValue(['mother', 'name'], 'Sabrina'));
  });
});
