import React, { useState } from 'react';
import { View } from 'react-native';

import ScreenHeader from 'src/components/screen-header';
import CustomSlider from 'src/components/custom-slider';
import RamSelection from 'src/components/ram-selection';
import Button from 'src/components/button';
import { storageRangeSliderData } from 'src/constants/DataFiltrationConstants';
import ViewWrapper from 'src/components/view-wrapper';
import { screenNames, ScreenTitles } from 'src/constants/Navigation';
import iConstants from './FilterSettingsScreen.constants';
import styles from './FilterSettingsScreen.styles';

const FilterSettingsScreen = ({ navigation }) => {
  const [selectedRamOptions, setSelectedRamOption] = useState(
    iConstants.defaultSelectedRamOptions,
  );
  const [storageRangeIndices, setStorageRangeIndices] = useState(
    iConstants.defaultStorageRangeIndices,
  );

  const onStorageRangeChangeHandler = (lowIndex, highIndex) => {
    if (
      storageRangeIndices.selectedHighIndex !== highIndex ||
      storageRangeIndices.selectedLowIndex !== lowIndex
    ) {
      setStorageRangeIndices({
        selectedLowIndex: lowIndex,
        selectedHighIndex: highIndex,
      });
    }
  };

  const navigateToFilteredServer = () => {
    navigation.navigate(screenNames.filterServer);
  };

  return (
    <>
      <ScreenHeader title={ScreenTitles.filterSettings} />
      <ViewWrapper scrollable>
        <CustomSlider
          customData={storageRangeSliderData}
          onChangeHandler={onStorageRangeChangeHandler}
        />
        <RamSelection
          selectedRamOptions={selectedRamOptions}
          setSelectedRamOption={setSelectedRamOption}
        />
        <Button
          label={iConstants.btnTextSearch}
          action={navigateToFilteredServer}
        />
        <View style={styles.paddedView} />
      </ViewWrapper>
    </>
  );
};

export default FilterSettingsScreen;
