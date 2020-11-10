import Immutable from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

const { Creators: userActions, Types } = createActions({
  createUser: ['data', 'callback'],
  setUserData: ['data'],
  clearUserData: ['data', 'callback'],
});

export interface User {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
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
  [Types.SET_USER_DATA]: (state = INITIAL_STATE, action: Action): any =>
    Immutable.merge(state, { ...action.data }),
  [Types.CLEAR_USER_DATA]: () => INITIAL_STATE,
});

export { Types as userTypes, userActions };
