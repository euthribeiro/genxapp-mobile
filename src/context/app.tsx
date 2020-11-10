import * as React from 'react';
//import AsyncStorage from '@react-native-community/async-storage';
import { Platform, StatusBar } from 'react-native';
//import { baseRegisterName } from '../config/project';
import SplashScreen from '../splash';
import { defaultColors } from '../styles';

// screens

import LoadingView from '../global/Screens/Loading';
import AlertView from '../global/Screens/Alert';
import SuccessView from '../global/Screens/Success';

interface ContextProps {
  darkTheme?: boolean;
  IsDarkTheme(value: boolean): void;
  Alert(
    title: string,
    message: string,
    cancelable?: boolean | undefined,
    callback?: () => void | undefined
  ): void;
  Loading(loading: boolean): void;
  Success(message: string): void;
}

export const AppContext = React.createContext<ContextProps>({});

export const AppProvider: React.FC = ({ children }) => {
  // alert
  const [messageAlert, setMessageAlert] = React.useState('');
  const [titleAlert, setTitleAlert] = React.useState('');
  const [showAlert, setShowAlert] = React.useState(false);
  const [cancelableAlert, setCancelableAlert] = React.useState(false);
  const [callbackAlert, setCallbackAlert] = React.useState(null);

  // loading
  const [loadingVisible, setLoadingVisible] = React.useState(false);

  // success

  const [successVisible, setSuccessVisible] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState('');

  // theme
  const [darkTheme, setDarkTheme] = React.useState<boolean>(true);
  // loaded and splash
  const [loaded, setLoaded] = React.useState(true);
  const [end, setEnd] = React.useState(false);

  /*async function getColorScheme() {
    const colorScheme = await AsyncStorage.getItem(
      `${baseRegisterName}/colorscheme`
    );
    if (colorScheme !== null && colorScheme !== undefined) {
      if (colorScheme === 'light') {
        setDarkTheme(true);
      } else {
        setDarkTheme(false);
      }
    }

    setLoaded(true);
  }

  React.useEffect(() => {
    getColorScheme();
  }, []);*/

  async function IsDarkTheme(value: boolean) {
    /*setDarkTheme(value);

    await AsyncStorage.setItem(
      `${baseRegisterName}/colorscheme`,
      !value ? 'dark' : 'light'
    );*/
  }

  function Alert(
    title: string,
    message: string,
    cancelable: boolean,
    callback?: () => void
  ) {
    setShowAlert(true);
    setTitleAlert(title);
    setMessageAlert(message);
    setCancelableAlert(cancelable);
    setCallbackAlert(callback);
  }

  function Loading(loading: boolean) {
    setLoadingVisible(loading);
  }

  function Success(message: string) {
    setSuccessMessage(message);
    setSuccessVisible(true);
  }

  if (!loaded || !end) {
    return <SplashScreen end={setEnd} />;
  }

  return (
    <AppContext.Provider
      value={{ darkTheme, IsDarkTheme, Alert, Loading, Success }}>
      <StatusBar
        backgroundColor={
          darkTheme ? defaultColors.secondary : defaultColors.secondary
        }
        barStyle={
          Platform.OS === 'ios' && darkTheme ? 'dark-content' : 'light-content'
        }
      />
      <LoadingView visible={loadingVisible} />
      <AlertView
        visible={showAlert}
        message={messageAlert}
        title={titleAlert}
        hide={(value) => setShowAlert(value)}
        cancel={cancelableAlert}
        callback={callbackAlert}
      />
      <SuccessView
        visible={successVisible}
        message={successMessage}
        hide={() => setSuccessVisible(false)}
      />
      {children}
    </AppContext.Provider>
  );
};
