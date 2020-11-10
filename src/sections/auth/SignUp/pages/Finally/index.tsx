import * as React from 'react';
import { BackHandler, ScrollView as Content, View } from 'react-native';
import { Text } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { Button } from '../../../../../global/components';
import { globalStyle, metrics } from '../../../../../styles';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../../../store/ducks/User';
import { useIsFocused } from '@react-navigation/native';
import { AppContext } from '../../../../../context/app';

const Finally: React.FC = ({ navigation }) => {
  const { Loading } = React.useContext(AppContext);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.User);
  const [loading, setLoading] = React.useState(true);
  const [success, setSuccess] = React.useState(true);
  const isFocused = useIsFocused();

  const doRegister = React.useCallback(() => {
    setLoading(true);
    Loading(true);

    dispatch(
      userActions.createUser(
        {
          ...user,
        },
        (suc) => {
          setLoading(false);
          Loading(false);
          setSuccess(suc);

          if (suc) {
            dispatch(userActions.clearUserData());
          }
        }
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  React.useEffect(() => {
    doRegister();
  }, [doRegister]);

  const doFinally = React.useCallback(() => {
    navigation.popToTop();
    navigation.goBack();
  }, [navigation]);

  React.useEffect(() => {
    const back = BackHandler.addEventListener('hardwareBackPress', () => {
      if (isFocused) {
        doFinally();
        return true;
      }

      return false;
    });

    return () => {
      back.remove();
    };
  }, [doFinally, isFocused, navigation]);

  if (loading) {
    return (
      <View style={[globalStyle.container]}>
        <Content contentContainerStyle={[globalStyle.content]}>
          <View>
            <Text style={[styles.message]}>
              Estamos finalizando seu cadastro, aguarde ...
            </Text>
          </View>
          <View>
            <LottieView
              autoPlay
              loop
              source={require('../../../../../assets/json/registration.json')}
              style={{
                width: metrics.baseLottieWidth,
                height: metrics.baseLottieHeight,
              }}
            />
          </View>
        </Content>
      </View>
    );
  }

  if (!success) {
    return (
      <View style={[globalStyle.container]}>
        <Content
          contentContainerStyle={[globalStyle.content, globalStyle.space]}>
          <View>
            <Text style={[styles.message]}>
              Falha ao realizar cadastro, por favor tente novamente. Se o
              problema persistir contate o administrador do sistema!
            </Text>
          </View>
          <View>
            <LottieView
              autoPlay
              loop
              source={require('../../../../../assets/json/servererror.json')}
              style={{
                width: metrics.baseLottieWidth,
                height: metrics.baseLottieHeight,
              }}
            />
          </View>
          <View>
            <Button onPress={doRegister}>Tentar novamente</Button>
          </View>
        </Content>
      </View>
    );
  }

  return (
    <View style={[globalStyle.container]}>
      <Content contentContainerStyle={[globalStyle.content, globalStyle.space]}>
        <Text style={[styles.title]}>Cadastro realizado com sucesso!</Text>
        <View
          style={[
            globalStyle.margY,
            globalStyle.justifyCenter,
            globalStyle.main,
          ]}>
          <Text style={[globalStyle.margY, styles.message]}>
            Seu cadastro foi realizado com sucesso em nossa plataforma!
          </Text>
          <Text style={[globalStyle.margY, styles.message]}>
            Você já pode utilizar os nossos serviços. Basta acessar sua conta
            usando seu usuário e senha que você acabou de cadastrar!
          </Text>
          <Text style={[globalStyle.margY, styles.message]}>
            Qualquer dúvida não deixe de nos contatar!
          </Text>
        </View>
        <View>
          <Button onPress={doFinally}>Voltar ao menu principal</Button>
        </View>
      </Content>
    </View>
  );
};

export default Finally;
