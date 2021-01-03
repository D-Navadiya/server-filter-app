import React from 'react';
import { View } from 'react-native';
import uniq from 'lodash/uniq';

import FieldTitle from 'src/components/field-title';
import {
  dataKeys,
  staticListKeys,
} from 'src/constants/DataFiltrationConstants';
import CustomDropdown from '../custom-dropdown';
import iConstants from './LocationSelection.constants';
import styles from './LocationSelection.styles';

const StaticServerList = require('src/static-data/StaticServerList.json');

const LocationSelection = ({ selected, onValueChange }) => {
  const uniqLocations = uniq(
    StaticServerList[staticListKeys.accessArrayKey].map(
      (serverData) => serverData[dataKeys.location],
    ),
  );
  const locationOptions = uniqLocations.map((location) => ({
    label: location,
    value: location,
  }));
  return (
    <View style={styles.LocationSelection_container}>
      <FieldTitle
        titleText={iConstants.titleText}
        snContainer={styles.LocationSelection_fieldText}
      />
      <CustomDropdown
        options={locationOptions}
        selected={selected}
        onValueChange={onValueChange}
        sn={styles.LocationSelection_customDropdown}
      />
    </View>
  );
};

export default LocationSelection;
