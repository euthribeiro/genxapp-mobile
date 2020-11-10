import { all, takeLatest } from 'redux-saga/effects';

// Types

import { authTypes } from '../ducks/Auth';
import { mirdbListTypes } from '../ducks/MirDB';
import { profileTypes } from '../ducks/Profile';
import { tarbaseListTypes } from '../ducks/Tarbase';
import { targetScanListTypes } from '../ducks/TargetScan';
import { userTypes } from '../ducks/User';

// sagas

import { doLogin, doLogout } from './auth';
import { getMirdbList } from './mirdb';
import { getUser, changeUser } from './profile';
import { getTarbaseList } from './tarbase';
import { getTargetScanList } from './targetscan';
import { createUser } from './user';

export default function* rootSaga() {
  yield all([
    // auth
    takeLatest(authTypes.DO_LOGIN, doLogin),
    takeLatest(authTypes.DO_LOGOUT, doLogout),

    // mirdb

    takeLatest(mirdbListTypes.GET_MIRDB_LIST, getMirdbList),

    // user
    takeLatest(userTypes.CREATE_USER, createUser),

    // profile

    takeLatest(profileTypes.GET_USER_DATA, getUser),
    takeLatest(profileTypes.CHANGE_PROFILE_USER, changeUser),

    // tarbase

    takeLatest(tarbaseListTypes.GET_TARBASE_LIST, getTarbaseList),

    // target scan

    takeLatest(targetScanListTypes.GET_TARGET_SCAN_LIST, getTargetScanList),
  ]);
}
