import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';

import ThemingStore from 'utils/ThemingStore';

import styles from './Checkbox.styles';

const { colors } = ThemingStore.currentTheme;

const CustomCheckbox = ({ label, checked, handleOnPress }) => (
  <View style={styles.Checkbox_container}>
    <TouchableOpacity
      style={styles.Checkbox_touchableOpacity}
      onPress={handleOnPress}
    >
      <Text style={styles.Checkbox_labelText}>{label}</Text>
    </TouchableOpacity>
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={handleOnPress}
      color={colors.primary}
    />
  </View>
);

export default CustomCheckbox;
