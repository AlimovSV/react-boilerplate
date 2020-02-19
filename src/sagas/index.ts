import { put } from 'redux-saga/effects';

import { updateSession } from '../store/system/actions';

export default function* rootSaga() {
  yield put(updateSession({ loggedIn: true, session: '', userName: 'John Johnson' }));
}
