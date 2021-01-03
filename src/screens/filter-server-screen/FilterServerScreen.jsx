import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { DataTable } from 'react-native-paper';
import slugify from 'slugify';
import { useFocusEffect } from '@react-navigation/native';

import {
  dataTableColumns,
  dataKeys,
} from 'src/constants/DataFiltrationConstants';
import { generalConsts } from 'src/constants/GenericConstants';
import LoaderViewWrapper from 'src/components/loader-view-wrapper';
import { filterDataAccToParams } from 'utils/DataFiltration';
import iConstants from './FilterServerScreen.constants';

const DataTableTitle = () =>
  dataTableColumns.map((column) => {
    const key = `${iConstants.tableTitleKeyPrefix}${generalConsts.slugSeparator}${column.key}`;
    return (
      <DataTable.Title key={key} numeric={column.numeric}>
        {column.name}
      </DataTable.Title>
    );
  });

const DataTableHeader = () => (
  <DataTable.Header>
    <DataTableTitle />
  </DataTable.Header>
);

const DataTableCell = ({ serverItem }) =>
  dataTableColumns.map((column) => {
    const key = `${iConstants.tableCellKeyPrefix}${generalConsts.slugSeparator}${column.key}`;
    return (
      <DataTable.Cell key={key} numeric={column.numeric}>
        {serverItem[column.key]}
      </DataTable.Cell>
    );
  });

const flatListItem = ({ item }) => {
  return (
    <DataTable.Row>
      <DataTableCell serverItem={item} />
    </DataTable.Row>
  );
};

const DataTableRows = ({ tableData }) => (
  // to lazy load the items
  <FlatList
    data={tableData}
    renderItem={flatListItem}
    keyExtractor={flatListKeyExtractor}
  />
);

const flatListKeyExtractor = (item, index) => {
  // temp solution to have an id
  const itemId = index + 1;
  const slugedRawKey = slugify(
    item[dataKeys.model],
    generalConsts.slugSeparator,
  );
  return `${slugedRawKey}${generalConsts.slugSeparator}${itemId}`;
};

const FilterServerScreen = ({ route: { params } }) => {
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);

  const getTableDataByParams = () => {
    setLoading(true);
    const filteredTableData = filterDataAccToParams(params);
    setTableData(filteredTableData);
    setLoading(false);
  };
  useFocusEffect(
    useCallback(() => {
      getTableDataByParams();
      return () => {
        setTableData([]);
        setLoading(true);
      };
    }, []),
  );

  return (
    <LoaderViewWrapper loading={loading}>
      <DataTable>
        <DataTableHeader />
        <DataTableRows tableData={tableData} />
      </DataTable>
    </LoaderViewWrapper>
  );
};

export default FilterServerScreen;
