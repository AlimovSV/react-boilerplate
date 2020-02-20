import { call, put } from 'redux-saga/effects';

import { updateSession } from '../store/system/actions';

import { usersAPI } from '../services';

export default function* rootSaga() {
  const users = yield call(() => usersAPI.listUsers());

  if (users.length > 0) {
    yield put(updateSession({ loggedIn: true, session: '', userName: users[0].name }));
  }
}
