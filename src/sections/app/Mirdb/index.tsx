import * as React from 'react';
import { ScrollView as Content } from 'react-native';
import { DataTable, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import { Container } from '../../../global/components';
import { AppContext } from '../../../context/app';
import { mirdbListActions } from '../../../store/ducks/MirDB';
import { globalStyle } from '../../../styles';

const Mirdb: React.FC = ({ navigation }) => {
  const { Loading } = React.useContext(AppContext);
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const mirdblist = useSelector((state) => state.MirDB.results);
  const pages = useSelector((state) => state.MirDB.pages);
  const page = useSelector((state) => state.MirDB.page);

  const mount = (page) => {
    Loading(true);
    dispatch(mirdbListActions.clearMirdbList());
    dispatch(
      mirdbListActions.getMirdbList(
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
    <Container backAndClose title="Mirdb">
      <Content
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[globalStyle.contentWithoutPadding]}>
        <DataTable style={[{ backgroundColor: colors.background }]}>
          <DataTable.Header>
            <DataTable.Title>mirna</DataTable.Title>
            <DataTable.Title>geneName</DataTable.Title>
            <DataTable.Title> </DataTable.Title>
          </DataTable.Header>
          {mirdblist?.map((i, index) => (
            <DataTable.Row
              key={i + index}
              onPress={() => navigation?.navigate('MirdbDetails', { item: i })}>
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

export default Mirdb;
