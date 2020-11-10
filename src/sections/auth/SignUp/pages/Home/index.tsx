import { StackHeaderProps } from '@react-navigation/stack';
import * as React from 'react';
import { ScrollView as Content, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { AppContext } from '../../../../../context/app';
import { Input, Button, Logo } from '../../../../../global/components';
import { userActions } from '../../../../../store/ducks/User';
import { globalStyle } from '../../../../../styles';
import { validaEmail } from '../../../../../util';

const Home: React.FC<StackHeaderProps> = ({ navigation }) => {
  const { Alert } = React.useContext(AppContext);
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const { username, first_name, last_name, password, email } = useSelector(
    (state) => state.User
  );

  const dispatch = useDispatch();

  const doNext = () => {
    if (first_name?.trim() === '') {
      Alert('Nome', 'Informe seu nome');
      return false;
    }

    if (last_name?.trim() === '') {
      Alert('Nome', 'Informe seu sobrenome');
      return false;
    }

    if (!validaEmail(email)) {
      Alert('E-mail', 'E-mail inválido');
      return;
    }

    if (username?.trim() === '') {
      Alert('Usuário', 'Escolha um nome de usuário');
      return false;
    }

    if (password !== confirmPassword) {
      Alert('Senha', 'Senha e confirmação de senha não combinam.');
      return;
    }

    if (password?.length < 3) {
      Alert('Senha', 'Informe uma senha de no mínimo 3 digitos alfanuméricos');
      return;
    }

    navigation.navigate('Terms');
  };

  const lastNameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const usernameRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const confirmPasswordRef = React.useRef(null);

  return (
    <View style={[globalStyle.container]}>
      <Content contentContainerStyle={[globalStyle.content]}>
        <Logo width={wp('30%')} height={wp('30%')} center />
        <Input
          label="Primeiro nome"
          placeholder="Escreva aqui"
          style={[globalStyle.margY]}
          value={first_name}
          onChangeText={(text) =>
            dispatch(
              userActions.setUserData({
                first_name: text,
              })
            )
          }
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => lastNameRef?.current?.focus()}
        />
        <Input
          ref={lastNameRef}
          label="Sobrenome"
          placeholder="Escreva aqui"
          style={[globalStyle.margY]}
          value={last_name}
          onChangeText={(text) =>
            dispatch(
              userActions.setUserData({
                last_name: text,
              })
            )
          }
          blurOnSubmit={false}
          returnKeyType="next"
          onSubmitEditing={() => emailRef?.current?.focus()}
        />
        <Input
          ref={emailRef}
          label="Email"
          placeholder="exemplo@email.com"
          style={[globalStyle.margY]}
          value={email}
          onChangeText={(text) =>
            dispatch(
              userActions.setUserData({
                email: text,
              })
            )
          }
          blurOnSubmit={false}
          returnKeyType="next"
          onSubmitEditing={() => usernameRef?.current?.focus()}
        />
        <Input
          ref={usernameRef}
          label="Username"
          placeholder="Escolha um nome de usuário"
          style={[globalStyle.margY]}
          value={username}
          onChangeText={(text) =>
            dispatch(
              userActions.setUserData({
                username: text,
              })
            )
          }
          blurOnSubmit={false}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef?.current?.focus()}
        />
        <Input
          ref={passwordRef}
          label="Senha (min. 3 dígitos)"
          secureTextEntry
          placeholder="●●●●●●"
          style={[globalStyle.margY]}
          value={password}
          onChangeText={(text) =>
            dispatch(
              userActions.setUserData({
                password: text,
              })
            )
          }
          blurOnSubmit={false}
          returnKeyType="next"
          onSubmitEditing={() => confirmPasswordRef?.current?.focus()}
        />
        <Input
          ref={confirmPasswordRef}
          label="Confirmar senha"
          placeholder="●●●●●●"
          secureTextEntry
          style={[globalStyle.margY]}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          returnKeyType="send"
          onSubmitEditing={doNext}
        />
        <Button onPress={doNext} style={[globalStyle.margY]}>
          Avançar
        </Button>
      </Content>
    </View>
  );
};

export default Home;
