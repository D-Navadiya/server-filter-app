import StaticServerList from 'src/static-data/StaticServerList.json';
import { staticListKeys } from 'src/constants/DataFiltrationConstants';

// exporting freezed json so that it can not be mutated

const staticServerListArray = Object.freeze(
  StaticServerList[staticListKeys.accessArrayKey],
);

export default staticServerListArray;
