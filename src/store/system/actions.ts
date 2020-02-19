// https://redux.js.org/recipes/usage-with-typescript/#type-checking-actions--action-creators

import { SystemState, SystemActions, SystemActionTypes } from './types';

export const updateSession = (session: SystemState): SystemActions => ({
  type: SystemActionTypes.UPDATE_SESSION,
  payload: session,
});
