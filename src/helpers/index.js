import { StyleSheet } from 'react-native';
import merge from 'lodash/merge';

import {
  storageRangeSliderData,
  storageUnits,
} from 'src/constants/DataFiltrationConstants';

export const styleCreator = (styles) => StyleSheet.create(styles);

// to merge react-native-paper and react-navigation themes
// and include/overwrite custom theme
export const themeMerger = (
  paperThemeObj,
  navigationThemeObj,
  customThemeObj,
) => merge(paperThemeObj, navigationThemeObj, customThemeObj);

export const convertHexToRgbA = (hex, opacity) => {
  const hexString = hex.replace('#', '');
  const r = parseInt(hexString.substring(0, 2), 16);
  const g = parseInt(hexString.substring(2, 4), 16);
  const b = parseInt(hexString.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity / 100})`;
};

export const getRangeSliderLabelText = (dataIndex) => {
  const storageType = storageRangeSliderData[dataIndex]?.type;
  const storageValue = storageRangeSliderData[dataIndex]?.value;
  return storageType ? `${storageValue} ${storageType}` : storageValue;
};

export const getRamOptionLabel = (option) => `${option} GB`;

export const convertToGb = (tb) => 1000 * tb;

export const getServerStorageByCellInGbs = (cellData) => {
  const isTb = cellData.includes(storageUnits.tb);
  const hddCount = Number(cellData[0]);
  const separator = 'x';
  const sepArray = cellData.split(separator);
  let totalGbs = 0;

  if (isTb) {
    const tbs = Number(sepArray[1].split(storageUnits.tb)[0]);
    totalGbs = convertToGb(hddCount * tbs);
  } else {
    const gbs = Number(sepArray[1].split(storageUnits.gb)[0]);
    totalGbs = hddCount * gbs;
  }

  return totalGbs;
};

export const getStorageRangeInGbs = ({
  selectedLowIndex,
  selectedHighIndex,
}) => {
  const selectedLowRangeData = storageRangeSliderData[selectedLowIndex];
  const selectedHighRangeData = storageRangeSliderData[selectedHighIndex];
  const isLowRangeInTb = selectedLowRangeData.type === storageUnits.tb;
  const isHighRangeInTb = selectedHighRangeData.type === storageUnits.tb;
  let lowRangeInGbs = selectedLowRangeData.value;
  let highRangeInGbs = selectedHighRangeData.value;
  if (isLowRangeInTb) {
    lowRangeInGbs = convertToGb(selectedLowRangeData.value);
  }
  if (isHighRangeInTb) {
    highRangeInGbs = convertToGb(selectedHighRangeData.value);
  }
  return {
    lowRangeInGbs,
    highRangeInGbs,
  };
};

export const testStorageRangeCondition = (
  serverStorageInGbs,
  { lowRangeInGbs, highRangeInGbs },
) =>
  lowRangeInGbs < serverStorageInGbs < highRangeInGbs ||
  lowRangeInGbs === serverStorageInGbs ||
  serverStorageInGbs === highRangeInGbs;

export const getServerRamByCell = (cellData) => {
  const separator = storageUnits.gb;
  const sepArray = cellData.split(separator);
  return Number(sepArray[0]);
};

export const testServerRamCondition = (serverRam, ramOptions) => {
  if (ramOptions.length) {
    return ramOptions.includes(serverRam);
  }
  return true;
};

export const testHddTypeByCell = (cellData, selectedHddType) => {
  if (selectedHddType) {
    return cellData.includes(selectedHddType?.toUpperCase());
  }
  return true;
};

export const testLocationByCell = (cellData, selectedLocation) => {
  if (selectedLocation) {
    return cellData === selectedLocation;
  }
  return true;
};
