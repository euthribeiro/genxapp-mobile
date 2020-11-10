import * as React from 'react';
import { View, Image, ScrollView as Content } from 'react-native';
import { Text } from 'react-native-paper';
import { globalStyle } from '../../../styles';
import { Header } from './components';
import { Button } from '../../../global/components';
import styles from './style';
import { AppContext } from '../../../context/app';
import { NavigationContext } from '@react-navigation/native';

const Logo = require('./../../../assets/images/logo.png');
const LogoDark = require('./../../../assets/images/logo-dark.png');

const Home: React.FC = () => {
  const navigation = React.useContext(NavigationContext);
  const { darkTheme } = React.useContext(AppContext);

  return (
    <View style={[globalStyle.container]}>
      <Content contentContainerStyle={[globalStyle.content]}>
        <Header />
        <View style={[globalStyle.space, globalStyle.main]}>
          <View>
            <Text style={[styles.text]}>Bem vindo(a) ao</Text>
            <Image
              source={darkTheme ? LogoDark : Logo}
              style={[styles.apresentationLogo]}
            />
            <View>
              <Text style={[styles.text]}>Aplicativo desenvolvido</Text>
              <Text style={[styles.text]}>
                pelos alunos da ciências da computação - Turma CC8P18 - 2020
              </Text>
              <Text style={[styles.text]}>Universidade Paulista - UNIP</Text>
              <Text style={[styles.version]}>Versão 1.0.0</Text>
            </View>
          </View>
          <View>
            <Button
              onPress={() => navigation.navigate('Login')}
              style={[styles.button]}>
              Acessar conta
            </Button>
            <Button
              onPress={() => navigation.navigate('Signup')}
              style={[styles.button]}>
              Criar conta
            </Button>
          </View>
        </View>
      </Content>
    </View>
  );
};

export default Home;
