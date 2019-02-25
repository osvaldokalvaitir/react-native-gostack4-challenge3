import { all, takeLatest } from 'redux-saga/effects';

import { Types as MapTypes } from '~/store/ducks/map';
import { getGithubUserRequest } from './map';

export default function* rootSaga() {
  return yield all([takeLatest(MapTypes.ADD_GITHUB_USER_REQUEST, getGithubUserRequest)]);
}