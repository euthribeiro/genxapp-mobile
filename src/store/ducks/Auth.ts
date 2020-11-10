import Immutable from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

const { Creators: authActions, Types } = createActions({
  doLogin: ['data', 'callback'],
  doLogout: ['data', 'callback'],
  doLoginSuccess: ['data'],
  doLogoutSuccess: [],
});

export interface DataLogin {
  isLogged: boolean;
  data: any;
}

interface Action {
  data: any;
}

const INITIAL_STATE: DataLogin = Immutable({
  isLogged: false,
  refresh: null,
  access: null,
});

export default createReducer(INITIAL_STATE, {
  [Types.DO_LOGIN_SUCCESS]: (state = INITIAL_STATE, action: Action): any =>
    Immutable.merge<DataLogin>(state, { ...action.data, isLogged: true }),
  [Types.DO_LOGOUT_SUCCESS]: () => INITIAL_STATE,
});

export { Types as authTypes, authActions };
