import { createStore } from 'redux';
import { Map } from 'immutable';
import reducers from './reducers';

export default createStore(
  reducers,
  new Map(),
);
