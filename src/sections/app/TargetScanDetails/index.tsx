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
            gene_name
          </Text>
          <Text style={[styles.text, { color: colors.background }]}>
            {item?.gene_name}
          </Text>
        </View>
        <View style={[styles.item]}>
          <Text style={[styles.label, { color: colors.background }]}>
            gene_id
          </Text>
          <Text style={[styles.text, { color: colors.background }]}>
            {item?.gene_id}
          </Text>
        </View>
        <View style={[styles.item]}>
          <Text style={[styles.label, { color: colors.background }]}>
            score
          </Text>
          <Text style={[styles.text, { color: colors.background }]}>
            {item?.score}
          </Text>
        </View>
        <View style={[styles.item]}>
          <Text style={[styles.label, { color: colors.background }]}>
            specie
          </Text>
          <Text style={[styles.text, { color: colors.background }]}>
            {item?.specie}
          </Text>
        </View>
      </Content>
    </Container>
  );
};

export default TarbaseDetails;
