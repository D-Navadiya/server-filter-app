import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';

import ThemingStore from 'utils/ThemingStore';
import { generalConsts } from 'src/constants/GenericConstants';
import styles from './CustomDropdown.styles';
import iConstants from './CustomDropdown.constants';

const { colors } = ThemingStore.currentTheme;

const CustomDropdown = ({ selected, onValueChange, options, sn }) => (
  <View style={styles.CustomDropdown_container}>
    <View style={[styles.CustomDropdown_pickerContainer, sn && sn]}>
      <Picker
        selectedValue={selected}
        style={styles.CustomDropdown_picker}
        dropdownIconColor={colors.primary}
        mode={iConstants.pickerModeDropdown}
        onValueChange={onValueChange}
      >
        {options.map((option) => (
          <Picker.Item
            label={option.label}
            value={option.value}
            key={`${iConstants.keyPrefix}${generalConsts.slugSeparator}${option.value}`}
          />
        ))}
      </Picker>
    </View>
  </View>
);

export default CustomDropdown;
