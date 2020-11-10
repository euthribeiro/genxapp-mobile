import { combineReducers } from 'redux';
import { reducer as offline } from 'redux-offline-queue';

import Auth from './Auth';
import MirDB from './MirDB';
import Profile from './Profile';
import Tarbase from './Tarbase';
import TargetScan from './TargetScan';
import User from './User';

export default combineReducers({
  offline,
  Auth,
  MirDB,
  Profile,
  Tarbase,
  TargetScan,
  User,
});
