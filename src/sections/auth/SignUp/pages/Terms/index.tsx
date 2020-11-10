import { StackHeaderProps } from '@react-navigation/stack';
import * as React from 'react';
import {
  ScrollView as Content,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { Checkbox, Button, Logo } from '../../../../../global/components';
import { defaultColors, globalStyle } from '../../../../../styles';
import styles from './style';

const Terms: React.FC<StackHeaderProps> = ({ navigation }) => {
  const [accept, setAccept] = React.useState(false);

  return (
    <View style={[globalStyle.container]}>
      <Content contentContainerStyle={[globalStyle.content]}>
        <View style={[globalStyle.space, globalStyle.main]}>
          <View style={[globalStyle.main, globalStyle.justifyCenter]}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                Linking.openURL('https://multigestor.net/download/termo.pdf')
              }
              style={[
                styles.terms,
                { backgroundColor: defaultColors.white },
                globalStyle.alignCenter,
              ]}>
              <Text style={[styles.termsTitle]}>Termos de uso</Text>
              <Text style={[styles.termsText]}>
                Ao avançar você declara ter lido os termos de uso da Genxapp.
              </Text>
              <Logo width={150} height={150} />
              <Text style={[styles.termsText]}>
                Toque aqui para abrir os termos de uso
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Checkbox
              onValueChange={setAccept}
              checked={accept}
              label="Eu li e aceito os termos de uso"
              style={[globalStyle.margY]}
            />
            <Button
              onPress={() => navigation.navigate('Finally')}
              disabled={!accept}
              style={[globalStyle.margY]}>
              Cadastrar
            </Button>
          </View>
        </View>
      </Content>
    </View>
  );
};

export default Terms;
