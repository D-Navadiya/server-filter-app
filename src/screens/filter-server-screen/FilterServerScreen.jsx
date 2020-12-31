import React from 'react';
import { FlatList } from 'react-native';
import { DataTable } from 'react-native-paper';
import slugify from 'slugify';

import { columns, dataKeys } from 'src/constants/DataFiltrationConstants';
import { generalConsts } from 'src/constants/GenericConstants';
import StaticServerListArray from 'utils/DataFiltration';
import iConstants from './FilterServerScreen.constants';
import styles from './FilterServerScreen.styles';

const DataTableTitle = () =>
  columns.map((column) => {
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
  columns.map((column) => {
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

const DataTableRows = () => (
  // to lazy load the items
  <FlatList
    data={StaticServerListArray}
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

const FilterServerScreen = () => (
  <DataTable>
    <DataTableHeader />
    <DataTableRows />

    {/* <DataTable.Pagination
      page={1}
      numberOfPages={3}
      onPageChange={(page) => {
        console.log(page);
      }}
      label="1-2 of 6"
    /> */}
  </DataTable>
);

export default FilterServerScreen;
