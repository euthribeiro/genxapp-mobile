import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import { AppContext, AppProvider } from './context/app';
import { DarkTheme, DefaultTheme } from './styles';

export interface Props {}

let appProviderRef: any;

export const getProviderState = () => appProviderRef;

const App: React.FC<Props> = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <AppContext.Consumer>
          {(values) => {
            appProviderRef = {
              ...values,
            };

            const { darkTheme } = values;
            return (
              <PersistGate loading={null} persistor={persistor}>
                <PaperProvider theme={!darkTheme ? DefaultTheme : DarkTheme}>
                  <NavigationContainer
                    theme={!darkTheme ? DefaultTheme : DarkTheme}>
                    <Routes />
                  </NavigationContainer>
                </PaperProvider>
              </PersistGate>
            );
          }}
        </AppContext.Consumer>
      </AppProvider>
    </Provider>
  );
};

export default App;
