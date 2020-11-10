import * as React from 'react';
import { ScrollView as Content } from 'react-native';
import { DataTable, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import { Container } from '../../../global/components';
import { AppContext } from '../../../context/app';
import { globalStyle } from '../../../styles';
import { targetScanListActions } from '../../../store/ducks/TargetScan';

const TargetScan: React.FC = ({ navigation }) => {
  const { Loading } = React.useContext(AppContext);
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const tgscanlist = useSelector((state) => state.TargetScan.results);
  const pages = useSelector((state) => state.TargetScan.pages);
  const page = useSelector((state) => state.TargetScan.page);

  const mount = (page) => {
    Loading(true);
    dispatch(targetScanListActions.clearTargetScanList());
    dispatch(
      targetScanListActions.getTargetScanList(
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
    <Container backAndClose title="Target scan">
      <Content
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[globalStyle.contentWithoutPadding]}>
        <DataTable style={[{ backgroundColor: colors.background }]}>
          <DataTable.Header>
            <DataTable.Title>mirna</DataTable.Title>
            <DataTable.Title>gene_id</DataTable.Title>
            <DataTable.Title> </DataTable.Title>
          </DataTable.Header>
          {tgscanlist?.map((i, index) => (
            <DataTable.Row
              key={i + index}
              onPress={() =>
                navigation?.navigate('TargetScanDetails', { item: i })
              }>
              <DataTable.Cell>{i?.mirna}</DataTable.Cell>
              <DataTable.Cell>{i?.gene_id}</DataTable.Cell>
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

export default TargetScan;
