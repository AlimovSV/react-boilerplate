// https://redux.js.org/recipes/usage-with-typescript/#type-checking-state

export interface SystemState {
  loggedIn: boolean;
  session: string;
  userName: string;
}

export enum SystemActionTypes {
  UPDATE_SESSION = 'UPDATE_SESSION',
}

interface UpdateSessionAction {
  type: SystemActionTypes.UPDATE_SESSION;
  payload: SystemState;
}

export type SystemActions = UpdateSessionAction;
