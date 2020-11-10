import { call, put } from 'redux-saga/effects';
import { getProviderState } from '../..';
import api from '../../services/api';
import { authActions } from '../ducks/Auth';
import { targetScanListActions } from '../ducks/TargetScan';

export function* getTargetScanList(action: any) {
  const { callback } = action;
  const { Alert } = getProviderState();

  let success = false;
  try {
    const configAuth = {
      params: {
        limit: 10,
        offset: 10 * action.data.page,
      },
    };

    const ret = yield call(api.get, 'tgscan', configAuth);

    if (ret.status === 200) {
      const { data } = ret;
      success = true;
      yield put(targetScanListActions.getTargetScanListSuccess(data));
      yield put(
        targetScanListActions.setPageTargetScanList(action?.data?.page)
      );
    }
  } catch (e) {
    if (e?.response?.status === 401) {
      yield put(authActions.doLogout());
    } else {
      Alert(
        'Servidor',
        'Falha ao buscar dados no sistema, por favor tente novamente.',
        false
      );
    }
  }

  if (callback) {
    callback(success);
  }
}
