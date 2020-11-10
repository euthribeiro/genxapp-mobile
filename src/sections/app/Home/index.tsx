import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import { BackHandler, View } from 'react-native';
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  useTheme,
} from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store/ducks/Auth';
import { globalStyle } from '../../../styles';
import { Item } from './components';
import styles from './style';

const Home: React.FC = ({ navigation }) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const { colors } = useTheme();

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  React.useEffect(() => {
    const back = BackHandler.addEventListener('hardwareBackPress', () => {
      if (isFocused) {
        showDialog();

        return true;
      }

      return false;
    });

    return () => {
      back.remove();
    };
  }, [isFocused]);

  return (
    <>
      <View style={[globalStyle.container, styles.container]}>
        <Item name="Mirdb" onPress={() => navigation?.navigate('Mirdb')} />
        <Item name="Tarbase" onPress={() => navigation?.navigate('Tarbase')} />
        <Item
          name="TargetScan"
          onPress={() => navigation?.navigate('TargetScan')}
        />
      </View>
      <Portal>
        <Dialog
          style={{ backgroundColor: colors.background }}
          visible={visible}
          onDismiss={hideDialog}>
          <Dialog.Title>Alerta</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Deseja mesmo sair dessa conta ?</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancelar</Button>
            <Button onPress={() => dispatch(authActions.doLogout())}>
              Sair
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};

export default Home;
