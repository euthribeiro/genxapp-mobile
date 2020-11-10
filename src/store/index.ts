import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer, REHYDRATE } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {
  offlineMiddleware,
  suspendSaga,
  consumeActionMiddleware,
} from 'redux-offline-queue';
import createSagaMiddleware from 'redux-saga';
import Tron from '../config/reactotronConfig';
import reducers from './ducks';
import sagas from './sagas';

const middleware = [];
const sagaMonitor = __DEV__ ? Tron.createSagaMonitor() : null;
const reduxEnhancer = __DEV__ ? Tron.createEnhancer() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middleware.push(offlineMiddleware(REHYDRATE));
middleware.push(suspendSaga(sagaMiddleware));
middleware.push(consumeActionMiddleware());

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [
    'Auth',
    'CardPassword',
    'ChangePassword',
    'Contact',
    'ForgetPassword',
    'ForgetPasswordVoucher',
    'Payment',
    'Transference',
    'TokenVoucher',
  ],
};

let Composer = null;

if (__DEV__) {
  Composer = compose(applyMiddleware(...middleware), reduxEnhancer);
} else {
  Composer = compose(applyMiddleware(...middleware));
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, Composer);
const persistor = persistStore(store);
sagaMiddleware.run(sagas);

export { store, persistor };
