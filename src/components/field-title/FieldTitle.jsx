import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import styles from './FieldTitle.styles';

const FieldTitle = ({ titleText, snContainer, snText }) => (
  <View style={[styles.FieldTitle_container, snContainer && snContainer]}>
    <Text style={[styles.FieldTitle_text, snText && snText]}>{titleText}</Text>
  </View>
);

export default FieldTitle;
