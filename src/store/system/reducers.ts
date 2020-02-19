// https://redux.js.org/recipes/usage-with-typescript/#type-checking-reducers

import { SystemActions, SystemActionTypes, SystemState } from './types';

const initialState: SystemState = {
  loggedIn: false,
  session: '',
  userName: '',
};

export function systemReducer(state = initialState, action: SystemActions): SystemState {
  switch (action.type) {
    case SystemActionTypes.UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
