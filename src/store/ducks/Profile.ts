import Immutable from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

const { Creators: profileActions, Types } = createActions({
  getUserData: ['data', 'callback'],
  getUserDataSuccess: ['data', 'callback'],
  setProfileDataUser: ['data'],
  changeProfileUser: ['callback'],
  clearProfile: [],
});

export interface User {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
}

interface Action {
  data: any;
}

const INITIAL_STATE: User = Immutable({
  username: '',
  password: '',
  first_name: '',
  last_name: '',
  email: '',
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_USER_DATA_SUCCESS]: (state = INITIAL_STATE, action: Action): any =>
    Immutable.merge(state, { ...action.data }),
  [Types.SET_PROFILE_DATA_USER]: (state = INITIAL_STATE, action: Action): any =>
    Immutable.merge(state, { ...action.data }),
  [Types.CLEAR_PROFILE]: () => INITIAL_STATE,
});

export { Types as profileTypes, profileActions };
