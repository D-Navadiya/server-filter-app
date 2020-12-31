import { StyleSheet } from 'react-native';
import merge from 'lodash/merge';

import { storageRangeSliderData } from 'src/constants/DataFiltrationConstants';

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
