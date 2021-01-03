import {
  dataKeys,
  staticListKeys,
} from 'src/constants/DataFiltrationConstants';
import {
  getServerRamByCell,
  getServerStorageByCellInGbs,
  getStorageRangeInGbs,
  testStorageRangeCondition,
  testServerRamCondition,
  testHddTypeByCell,
  testLocationByCell,
} from 'src/helpers';

const StaticServerList = require('src/static-data/StaticServerList.json');

const filterServerListFn = (
  serverData,
  storageRangeInGbs,
  ramOptions = [],
  hdd,
  location,
) => {
  const serverStorageInGbs = getServerStorageByCellInGbs(
    serverData[dataKeys.hdd],
  );
  const storageRangeCheck = testStorageRangeCondition(
    serverStorageInGbs,
    storageRangeInGbs,
  );

  const serverRam = getServerRamByCell(serverData[dataKeys.ram]);
  const serverRamCheck = testServerRamCondition(serverRam, ramOptions);

  const serverHddTypeCheck = testHddTypeByCell(serverData[dataKeys.hdd], hdd);

  const serverLocationCheck = testLocationByCell(
    serverData[(dataKeys.location, location)],
  );

  return (
    storageRangeCheck &&
    serverRamCheck &&
    serverHddTypeCheck &&
    serverLocationCheck
  );
};

export const filterDataAccToParams = ({
  storageRangeIndices,
  ramOptions,
  hdd,
  location,
}) => {
  const storageRangeInGbs = getStorageRangeInGbs(storageRangeIndices);

  const staticServerListArray = StaticServerList[staticListKeys.accessArrayKey];

  const filteredData = staticServerListArray.filter((serverData) =>
    filterServerListFn(
      serverData,
      storageRangeInGbs,
      ramOptions,
      hdd,
      location,
    ),
  );
  return filteredData;
};
