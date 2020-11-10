import * as React from 'react';
import { ScrollView as Content } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { AppContext } from '../../../context/app';
import { Container, Input, Button } from '../../../global/components';
import { profileActions } from '../../../store/ducks/Profile';
import { globalStyle } from '../../../styles';
import { validaEmail } from '../../../util';
//import styles from './style';

const Config: React.FC = ({ navigation }) => {
  const { colors } = useTheme();
  const { Loading, Alert } = React.useContext(AppContext);
  const dispatch = useDispatch();

  // user

  const { username, email, first_name, last_name } = useSelector(
    (state) => state.Profile
  );

  const getProfileData = () => {
    Loading(true);
    dispatch(
      profileActions.getUserData(null, (success: boolean) => {
        if (!success) {
          navigation?.goBack();
        }

        Loading(false);
      })
    );
  };

  React.useEffect(() => getProfileData(), []);

  const doChangeUser = () => {
    if (username === '') {
      Alert('Username', 'Nome de usuário inválido');
      return;
    }

    if (first_name === '') {
      Alert('Nome', 'Informe seu nome');
      return;
    }

    if (last_name === '') {
      Alert('Sobrenome', 'Informe seu sobrenome');
      return;
    }

    if (!validaEmail(email)) {
      Alert('E-mail', 'E-mail inválido');
      return;
    }

    Loading(true);
    dispatch(
      profileActions.changeProfileUser(() => {
        Loading(false);
      })
    );
  };

  return (
    <Container back title="Dados cadastrais">
      <Content
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="never"
        contentContainerStyle={[globalStyle.contentWithoutPaddingHorizontal]}>
        <Input
          style={[globalStyle.margY]}
          label="Usuário"
          placeholder="nickname"
          value={username}
          onChangeText={(text: string) =>
            dispatch(
              profileActions.setProfileDataUser({
                username: text,
              })
            )
          }
        />
        <Input
          style={[globalStyle.margY]}
          label="Nome"
          placeholder="Ex.: Joaquim"
          value={first_name}
          onChangeText={(text: string) =>
            dispatch(
              profileActions.setProfileDataUser({
                first_name: text,
              })
            )
          }
        />
        <Input
          style={[globalStyle.margY]}
          label="Sobrenome"
          placeholder="Ex.: da Silva"
          value={last_name}
          onChangeText={(text: string) =>
            dispatch(
              profileActions.setProfileDataUser({
                last_name: text,
              })
            )
          }
        />
        <Input
          style={[globalStyle.margY]}
          label="E-mail"
          placeholder="exemplo@email.com"
          value={email}
          onChangeText={(text: string) =>
            dispatch(
              profileActions.setProfileDataUser({
                email: text,
              })
            )
          }
        />
        <Button
          style={[globalStyle.margY]}
          color={colors.primary}
          onPress={doChangeUser}
          labelStyle={[{ color: colors.background }]}>
          Alterar
        </Button>
      </Content>
    </Container>
  );
};

export default Config;
