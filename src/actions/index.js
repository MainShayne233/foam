import * as TYPES from '../constants/action_types.js';

export const setValue = (key, value) => ({
  key,
  value,
  type: TYPES.SET_VALUE,
});
