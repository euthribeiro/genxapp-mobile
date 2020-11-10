import { call, put } from 'redux-saga/effects';
import { getProviderState } from '../../index';
import api from '../../services/api';
import { authActions } from '../ducks/Auth';

export function* doLogin(action: any) {
  const { callback } = action;
  const { Alert } = getProviderState();
  let success = false;
  try {
    const ret = yield call(api.post, 'login/', {
      ...action.data,
    });

    if (ret.status === 200) {
      const { data } = ret;
      success = true;
      yield put(authActions.doLoginSuccess(data));
      api.defaults.headers.Authorization = `Bearer ${data.access}`;
    } else {
      Alert('Login', 'Usuário ou senha inválidos');
    }
  } catch (e) {
    if (e?.response?.status === 401) {
      Alert('Login', 'Usuário ou senha inválidos');
    } else {
      Alert(
        'Login',
        'Todo mundo erra. Desta vez foram os nossos sistemas :(. Por favor tente novamente mais tarde ...'
      );
    }
  }

  if (callback) {
    callback(success);
  }
}

export function* doLogout() {
  const { Alert } = getProviderState();

  try {
    yield put(authActions.doLogoutSuccess());

    Alert('Sessão encerrada', 'Obrigado por utilizar nosso aplicativo!', false);
  } catch (e) {}
}
