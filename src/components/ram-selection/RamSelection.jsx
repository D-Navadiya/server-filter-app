import React from 'react';
import { View } from 'react-native';

import { ramOptions } from 'src/constants/DataFiltrationConstants';

import { getRamOptionLabel } from 'src/helpers';
import { generalConsts } from 'src/constants/GenericConstants';
import Checkbox from 'src/components/checkbox';
import FieldTitle from 'src/components/field-title';
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
      {ramOptions.map((option) => (
        <Checkbox
          key={`${iConstants.ramOptionKeyPrefix}${generalConsts.slugSeparator}${option}`}
          label={getRamOptionLabel(option)}
          checked={selectedRamOptions.includes(option)}
          handleOnPress={() => handleOnCheckboxPress(option)}
        />
      ))}
    </View>
  );
};

export default RamSelection;
