import * as React from 'react';
import { View, ScrollView as Content } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { Container } from '../../../global/components';
import { globalStyle } from '../../../styles';
import styles from './style';

const TarbaseDetails: React.FC = ({ route }) => {
  const item = route?.params?.item;
  const { colors } = useTheme();

  return (
    <Container back title="Detalhes">
      <Content contentContainerStyle={[globalStyle.contentWithoutPadding]}>
        <View style={[styles.item]}>
          <Text style={[styles.label, { color: colors.background }]}>
            mirna
          </Text>
          <Text style={[styles.text, { color: colors.background }]}>
            {item?.mirna}
          </Text>
        </View>
        <View style={[styles.item]}>
          <Text style={[styles.label, { color: colors.background }]}>
            geneName
          </Text>
          <Text style={[styles.text, { color: colors.background }]}>
            {item?.geneName}
          </Text>
        </View>
        <View style={[styles.item]}>
          <Text style={[styles.label, { color: colors.background }]}>
            method
          </Text>
          <Text style={[styles.text, { color: colors.background }]}>
            {item?.method}
          </Text>
        </View>
        <View style={[styles.item]}>
          <Text style={[styles.label, { color: colors.background }]}>
            species
          </Text>
          <Text style={[styles.text, { color: colors.background }]}>
            {item?.species}
          </Text>
        </View>
        <View style={[styles.item]}>
          <Text style={[styles.label, { color: colors.background }]}>
            direct_indirect
          </Text>
          <Text style={[styles.text, { color: colors.background }]}>
            {item?.direct_indirect}
          </Text>
        </View>
        <View style={[styles.item]}>
          <Text style={[styles.label, { color: colors.background }]}>
            up_down
          </Text>
          <Text style={[styles.text, { color: colors.background }]}>
            {item?.up_down}
          </Text>
        </View>
      </Content>
    </Container>
  );
};

export default TarbaseDetails;
