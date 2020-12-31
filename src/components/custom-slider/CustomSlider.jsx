import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import Slider from 'rn-range-slider';

import { getRangeSliderLabelText } from 'src/helpers';
import FieldTitle from 'src/components/field-title';
import Thumb from './custom-slider-components/Thumb';
import Rail from './custom-slider-components/Rail';
import RailSelected from './custom-slider-components/RailSelected';
import Notch from './custom-slider-components/Notch';
import Label from './custom-slider-components/Label';
import styles from './CustomSlider.styles';
import iConstants from './CustomSlider.constants';

const LabelText = ({ dataIndex }) => (
  <Text style={styles.CustomSlider_labelText}>
    {getRangeSliderLabelText(dataIndex)}
  </Text>
);

const SliderScreen = ({ customData, onChangeHandler }) => {
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(
    (indexValue) => <Label text={getRangeSliderLabelText(indexValue)} />,
    [],
  );
  const renderNotch = useCallback(() => <Notch />, []);

  const minIndex = 0;
  const maxIndex = customData.length - 1;

  return (
    <View style={styles.CustomSlider_container}>
      <FieldTitle
        titleText={iConstants.titleText}
        snContainer={styles.CustomSlider_fieldTitleContainer}
      />
      <Slider
        min={minIndex}
        max={maxIndex}
        step={1}
        floatingLabel={false}
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={onChangeHandler}
      />
      <View style={styles.CustomSlider_horizontalContainer}>
        <LabelText dataIndex={minIndex} />
        <LabelText dataIndex={maxIndex} />
      </View>
    </View>
  );
};

export default SliderScreen;
