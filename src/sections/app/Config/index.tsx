import * as React from 'react';
import { ScrollView as Content, View } from 'react-native';
import { Text, List, useTheme, Switch } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { Container, Button } from '../../../global/components';
import { authActions } from '../../../store/ducks/Auth';
import { globalStyle } from '../../../styles';
import styles from './style';

const Config: React.FC = ({ navigation }) => {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const [notification, setNotification] = React.useState(false);
  const [updateNotification, setUpdateNotification] = React.useState(false);

  return (
    <Container backAndClose title="Configurações">
      <Content
        contentContainerStyle={[globalStyle.contentWithoutPaddingHorizontal]}>
        <View style={[globalStyle.space, globalStyle.main]}>
          <View>
            <List.Section>
              <List.Subheader
                style={[
                  styles.listSection,
                  {
                    color: colors.text,
                    backgroundColor: colors.background,
                  },
                ]}>
                Dados cadastrais
              </List.Subheader>
              <List.Item
                style={[styles.item, { backgroundColor: colors.background }]}
                titleStyle={[styles.titleItemStyle, { color: colors.text }]}
                title="Alterar dados cadastrais"
                description="Altere seus dados de cadastro"
                descriptionStyle={[{ color: colors.text }]}
                left={(props) => (
                  <List.Icon {...props} icon="folder" color={colors.text} />
                )}
                onPress={() => navigation?.navigate('Profile')}
              />
            </List.Section>
            <List.Section>
              <List.Subheader
                style={[
                  globalStyle.bold,
                  styles.listSection,
                  {
                    color: colors.text,
                    backgroundColor: colors.background,
                  },
                ]}>
                Notificações
              </List.Subheader>
              <View style={[globalStyle.row, styles.switchView]}>
                <Switch value={notification} onValueChange={setNotification} />
                <Text style={[styles.switchText, { color: colors.background }]}>
                  Receber notificações sobre atualizações
                </Text>
              </View>
              <View style={[globalStyle.row, styles.switchView]}>
                <Switch
                  value={updateNotification}
                  onValueChange={setUpdateNotification}
                />
                <Text style={[styles.switchText, { color: colors.background }]}>
                  Receber notificações sobre dados de pesquisa
                </Text>
              </View>
            </List.Section>
          </View>
          <View>
            <Button
              color={colors.primary}
              onPress={() => {
                dispatch(authActions.doLogout());
              }}
              labelStyle={[{ color: colors.background }]}>
              LOGOUT
            </Button>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Config;
