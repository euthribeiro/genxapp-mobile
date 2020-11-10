import * as React from 'react';
import { View, TouchableOpacity, ScrollView as Content } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import { useDispatch } from 'react-redux';
import { AppContext } from '../../../context/app';
import { Input, Button, Logo } from '../../../global/components';
import { authActions } from '../../../store/ducks/Auth';
import { globalStyle, metrics } from '../../../styles';
import styles from './style';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const { Alert, Loading } = React.useContext(AppContext);
  const { colors } = useTheme();

  // vars

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const doLogin = () => {
    if (!(username && username !== '')) {
      Alert('Usuário', 'Informe o usuário');
      return;
    }

    if (!(password && password !== '')) {
      Alert('Senha', 'Digite sua senha para acessar a conta');
      return;
    }

    Loading(true);
    dispatch(
      authActions.doLogin(
        {
          username,
          password,
        },
        () => {
          Loading(false);
        }
      )
    );
  };

  return (
    <View style={[globalStyle.container]}>
      <Content
        contentContainerStyle={[
          globalStyle.content,
          globalStyle.justifyCenter,
        ]}>
        <Logo style={[globalStyle.margAuto]} />
        <Input
          ref={null}
          style={[globalStyle.margY]}
          label="Username"
          placeholder="exemple@exemple.com"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          ref={null}
          style={[globalStyle.margY]}
          label="Senha"
          placeholder="●●●●●●"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          style={[globalStyle.alignCenter, globalStyle.row, globalStyle.margY]}>
          <Icon
            name="chevron-right"
            size={metrics.baseIcon}
            color={colors.primary}
          />
          <Text style={[styles.forgetPassText]}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <Button onPress={doLogin} style={[globalStyle.margY]}>
          Entrar
        </Button>
      </Content>
    </View>
  );
};

export default Login;
