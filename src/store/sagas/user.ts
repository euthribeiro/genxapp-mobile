import { call } from 'redux-saga/effects';
import { getProviderState } from '../..';
import api from '../../services/api';

export function* createUser(action: any) {
  const { callback } = action;
  const { Alert } = getProviderState();

  let success = false;
  try {
    const ret = yield call(api.post, 'user/?format=json', {
      ...action.data,
    });

    if (ret.status === 201) {
      success = true;
    } else {
      Alert(
        'Usuário',
        'Falha ao criar usuário. Por favor tente novamente',
        false
      );
    }
  } catch (e) {
    Alert(
      'Usuário',
      'Falha ao criar usuário. Por favor tente novamente',
      false
    );
  }

  if (callback) {
    callback(success);
  }
}
