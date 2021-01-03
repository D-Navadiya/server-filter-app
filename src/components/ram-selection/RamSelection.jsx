import React from 'react';
import { View } from 'react-native';

import { ramOptions } from 'src/constants/DataFiltrationConstants';

import { getRamOptionLabel } from 'src/helpers';
import { generalConsts } from 'src/constants/GenericConstants';
import FieldTitle from '../field-title';
import Checkbox from '../checkbox';
import iConstants from './RamSelection.constants';
import styles from './RamSelection.styles';

const RamSelection = ({ selectedRamOptions, setSelectedRamOption }) => {
  const handleOnCheckboxPress = (option) => {
    if (selectedRamOptions.includes(option)) {
      const modifiedArray = selectedRamOptions.filter(
        (ramOption) => ramOption !== option,
      );
      setSelectedRamOption([...modifiedArray]);
    } else {
      setSelectedRamOption([...selectedRamOptions, option]);
    }
  };
  return (
    <View style={styles.RamSelection_container}>
      <FieldTitle
        titleText={iConstants.titleText}
        snContainer={styles.RamSelection_fieldTitleContainer}
      />
      <View style={styles.RamSelection_ramOptionsViewContainer}>
        {ramOptions.map((option) => (
          <View
            style={styles.RamSelection_ramOptionViewContainer}
            key={`${iConstants.ramOptionKeyPrefix}${generalConsts.slugSeparator}${option}`}
          >
            <Checkbox
              label={getRamOptionLabel(option)}
              checked={selectedRamOptions.includes(option)}
              handleOnPress={() => handleOnCheckboxPress(option)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default RamSelection;
