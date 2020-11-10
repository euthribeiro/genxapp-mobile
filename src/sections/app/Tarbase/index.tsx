import * as React from 'react';
import { ScrollView as Content } from 'react-native';
import { DataTable, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import { Container } from '../../../global/components';
import { AppContext } from '../../../context/app';
import { globalStyle } from '../../../styles';
import { tarbaseListActions } from '../../../store/ducks/Tarbase';

const Tarbase: React.FC = ({ navigation }) => {
  const { Loading } = React.useContext(AppContext);
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const tarbaselist = useSelector((state) => state.Tarbase.results);
  const pages = useSelector((state) => state.Tarbase.pages);
  const page = useSelector((state) => state.Tarbase.page);

  const mount = (page) => {
    Loading(true);
    dispatch(tarbaseListActions.clearTarbaseList());
    dispatch(
      tarbaseListActions.getTarbaseList(
        {
          page,
        },
        () => {
          Loading(false);
        }
      )
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => mount(0), []);

  return (
    <Container backAndClose title="Tarbase">
      <Content
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[globalStyle.contentWithoutPadding]}>
        <DataTable style={[{ backgroundColor: colors.background }]}>
          <DataTable.Header>
            <DataTable.Title>mirna</DataTable.Title>
            <DataTable.Title>geneName</DataTable.Title>
            <DataTable.Title> </DataTable.Title>
          </DataTable.Header>
          {tarbaselist?.map((i, index) => (
            <DataTable.Row
              key={i + index}
              onPress={() =>
                navigation?.navigate('TarbaseDetails', { item: i })
              }>
              <DataTable.Cell>{i?.mirna}</DataTable.Cell>
              <DataTable.Cell>{i?.geneName}</DataTable.Cell>
              <DataTable.Cell style={[globalStyle.justifyCenter]}>
                <Icon name="chevron-right" />
              </DataTable.Cell>
            </DataTable.Row>
          ))}
          <DataTable.Pagination
            page={page}
            numberOfPages={pages}
            onPageChange={mount}
            label={`${page} de ${pages}`}
          />
        </DataTable>
      </Content>
    </Container>
  );
};

export default Tarbase;
