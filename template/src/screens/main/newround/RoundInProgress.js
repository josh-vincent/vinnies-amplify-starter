import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import styles from 'theme/Styles';
import {DataTable} from 'react-native-paper';
import RoundedBox from 'ui/RoundedBox';
import RBSheet from 'react-native-raw-bottom-sheet';
const itemsPerPage = 2;

function RoundInProgress(props) {
  const refRBSheet = useRef();
  const {navigation} = props;
  const [page, setPage] = React.useState(0);
  const [perPage, setPerPage] = React.useState(2);

  const from = page * itemsPerPage;
  const to = (page + 1) * itemsPerPage;

  const data = [
    {
      name: 'Josh Vincent',
      scores: [
        {holenumber: 1, holeScore: 1},
        {holenumber: 2, holeScore: 2},
        {holenumber: 3, holeScore: 3},
        {holenumber: 4, holeScore: 4},
        {holenumber: 5, holeScore: 5},
        {holenumber: 6, holeScore: 6},
        {holenumber: 7, holeScore: 7},
        {holenumber: 8, holeScore: 8},
        {holenumber: 9, holeScore: 9},
        {holenumber: 10, holeScore: 10},
        {holenumber: 11, holeScore: 11},
        {holenumber: 12, holeScore: 12},
        {holenumber: 13, holeScore: 13},
        {holenumber: 14, holeScore: 14},
        {holenumber: 15, holeScore: 15},
        {holenumber: 16, holeScore: 16},
        {holenumber: 17, holeScore: 17},
        {holenumber: 18, holeScore: 18},
      ],
      total: 33,
    },
    {
      name: 'Daniel Shinners',
      scores: [
        {holenumber: 1, holeScore: 1},
        {holenumber: 2, holeScore: 2},
        {holenumber: 3, holeScore: 3},
        {holenumber: 4, holeScore: 4},
        {holenumber: 5, holeScore: 5},
        {holenumber: 6, holeScore: 6},
        {holenumber: 7, holeScore: 7},
        {holenumber: 8, holeScore: 8},
        {holenumber: 9, holeScore: 9},
        {holenumber: 10, holeScore: 10},
        {holenumber: 11, holeScore: 11},
        {holenumber: 12, holeScore: 12},
        {holenumber: 13, holeScore: 13},
        {holenumber: 14, holeScore: 14},
        {holenumber: 15, holeScore: 15},
        {holenumber: 16, holeScore: 16},
        {holenumber: 17, holeScore: 17},
        {holenumber: 18, holeScore: 18},
      ],
      total: 33,
    },
    {
      name: 'Eddie Nicolette',
      scores: [
        {holenumber: 1, holeScore: 1},
        {holenumber: 2, holeScore: 2},
        {holenumber: 3, holeScore: 3},
        {holenumber: 4, holeScore: 4},
        {holenumber: 5, holeScore: 5},
        {holenumber: 6, holeScore: 6},
        {holenumber: 7, holeScore: 7},
        {holenumber: 8, holeScore: 8},
        {holenumber: 9, holeScore: 9},
        {holenumber: 10, holeScore: 10},
        {holenumber: 11, holeScore: 11},
        {holenumber: 12, holeScore: 12},
        {holenumber: 13, holeScore: 13},
        {holenumber: 14, holeScore: 14},
        {holenumber: 15, holeScore: 15},
        {holenumber: 16, holeScore: 16},
        {holenumber: 17, holeScore: 17},
        {holenumber: 18, holeScore: 18},
      ],
      total: 33,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 10,
          padding: 10,
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {data.map((hole) => (
          <RoundedBox
            name={'Hole ' + hole.holenumber}
            icon={'golf'}
            iconSize={40}
            selected={hole.holeScore !== 0 ? true : false}
            handleChange={() => navigation.navigate('ScoringScreen')}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.fullScreenPrimaryButton}
        onPress={() => refRBSheet.current.open()}>
        <Text style={styles.buttonsCtaText}>SCORECARD</Text>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <DataTable>
          <DataTable.Header style={{fontSize: 52}}>
            <DataTable.Title style={{flex: 5}}>
              <Text adjustsFontSizeToFit style={{fontSize: 16}}>
                Leaderboard
              </Text>
            </DataTable.Title>
            <DataTable.Title style={localStyles.headerCells} numeric>
              {!page == 1 ? 1 : 10}
            </DataTable.Title>
            <DataTable.Title style={localStyles.headerCells} numeric>
              {!page == 1 ? 2 : 11}
            </DataTable.Title>
            <DataTable.Title style={localStyles.headerCells} numeric>
              {!page == 1 ? 3 : 12}
            </DataTable.Title>
            <DataTable.Title style={localStyles.headerCells} numeric>
              {!page == 1 ? 4 : 13}
            </DataTable.Title>
            <DataTable.Title style={localStyles.headerCells} numeric>
              {!page == 1 ? 5 : 14}
            </DataTable.Title>
            <DataTable.Title style={localStyles.headerCells} numeric>
              {!page == 1 ? 6 : 15}
            </DataTable.Title>
            <DataTable.Title style={localStyles.headerCells} numeric>
              {!page == 1 ? 7 : 16}
            </DataTable.Title>
            <DataTable.Title style={localStyles.headerCells} numeric>
              {!page == 1 ? 8 : 17}
            </DataTable.Title>
            <DataTable.Title style={localStyles.headerCells} numeric>
              {!page == 1 ? 9 : 18}
            </DataTable.Title>
            <DataTable.Title
              style={localStyles.headerCells}
              numeric
              sortDirection={'descending'}
              onPress={() => console.warn('flip')}
              style={{flex: 1}}>
              T
            </DataTable.Title>
          </DataTable.Header>
          {data.map((row) => (
            <DataTable.Row key={row.name}>
              <DataTable.Cell style={{flex: 5, alignItems: 'center'}}>
                {row.name}
              </DataTable.Cell>
              {row.scores.slice(page * 9, page * 9 + 9).map((hole) => (
                <DataTable.Cell style={localStyles.cells} numeric>
                  {hole.holeScore}
                </DataTable.Cell>
              ))}
              <DataTable.Cell style={localStyles.lastCell} numeric>
                {row.total}
              </DataTable.Cell>
            </DataTable.Row>
          ))}
          <DataTable.Pagination
            page={page}
            numberOfPages={2}
            onPageChange={(page) => setPage(page)}
          />
        </DataTable>
      </RBSheet>
    </View>
  );
}

const localStyles = StyleSheet.create({
  headerCells: {
    justifyContent: 'center',
    fontSize: 12,
  },
  cells: {
    justifyContent: 'center',
  },
  lastCell: {},
});

export default RoundInProgress;
