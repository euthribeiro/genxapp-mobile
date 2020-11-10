import { call, put, select } from 'redux-saga/effects';
import { getProviderState } from '../..';
import api from '../../services/api';
import { authActions } from '../ducks/Auth';
import { profileActions } from '../ducks/Profile';

export function* getUser(action: any) {
  const { callback } = action;
  const { Alert } = getProviderState();

  let success = false;
  try {
    const ret = yield call(api.get, 'user_auth');

    if (ret.status === 200) {
      const { data } = ret;
      success = true;
      yield put(profileActions.getUserDataSuccess(data));
    } else {
      Alert(
        'Usuário',
        'Falha ao retornar dados do usuário, por favor tente novamente mais tarde.',
        false
      );
    }
  } catch (e) {
    if (e?.response?.status === 401) {
      yield put(authActions.doLogout());
    } else {
      Alert(
        'Usuário',
        'Falha ao retornar dados do usuário, por favor tente novamente mais tarde.',
        false
      );
    }
  }

  if (callback) {
    callback(success);
  }
}

export function* changeUser(action: any) {
  const { callback } = action;

  const { Alert, Success } = getProviderState();

  const user = yield select((state) => state.Profile);

  try {
    const ret = yield call(api.put, '/user_auth/?format=json', {
      ...user,
    });

    if (ret.status === 200) {
      Success('Usuário alterado com sucesso!');
    } else {
      Alert(
        'Usuário',
        'Falha ao alterar dados do usuário, por favor tente novamente mais tarde.',
        false
      );
    }
  } catch (e) {
    Alert(
      'Usuário',
      'Falha ao alterar dados do usuário, por favor tente novamente mais tarde.',
      false
    );
  }

  if (callback) {
    callback();
  }
}
