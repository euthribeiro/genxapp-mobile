import Reactotron, {
  openInEditor,
  trackGlobalErrors,
} from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

declare global {
  interface Console {
    tron: (payload: any) => void;
  }
}

const Tron = () => {
  if (__DEV__) {
    const tron: any = Reactotron.configure()
      .useReactNative()
      .use(trackGlobalErrors({}))
      .use(openInEditor())
      .use(reactotronRedux())
      .use(sagaPlugin({ except: [''] }))
      .connect();
    tron.clear();
    console.tron = tron;
    return tron;
  }
  return {};
};

export default Tron();
