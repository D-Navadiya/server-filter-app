import React from 'react';
import { View } from 'react-native';

import FieldTitle from 'src/components/field-title';
import { hddOptions } from 'src/constants/DataFiltrationConstants';
import CustomDropdown from '../custom-dropdown';
import iConstants from './HddSelection.constants';
import styles from './HddSelection.styles';

const HddSelection = ({ selected, onValueChange }) => (
  <View style={styles.HddSelection_container}>
    <FieldTitle
      titleText={iConstants.titleText}
      snContainer={styles.HddSelection_fieldText}
    />
    <CustomDropdown
      options={hddOptions}
      selected={selected}
      onValueChange={onValueChange}
    />
  </View>
);

export default HddSelection;
