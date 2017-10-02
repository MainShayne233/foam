import * as TYPES from '../constants/action_types';

export default function (state, action) {
  switch (action.type) {
    case TYPES.SET_VALUE: {
      const keyPath = action.key.constructor === Array ? action.key : [action.key];
      return state.setIn(keyPath, action.value);
    }
    default: {
      return state;
    }
  }
}
