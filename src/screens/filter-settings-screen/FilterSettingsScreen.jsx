import React, { useReducer } from 'react';
import { View } from 'react-native';

import * as actions from 'src/reducers/data-filtration-reducer/actions';
import ScreenHeader from 'src/components/screen-header';
import CustomSlider from 'src/components/custom-slider';
import RamSelection from 'src/components/ram-selection';
import HddSelection from 'src/components/hdd-selection';
import LocationSelection from 'src/components/location-selection';
import DataFiltrationReducer from 'src/reducers/data-filtration-reducer';
import Button from 'src/components/button';
import { storageRangeSliderData } from 'src/constants/DataFiltrationConstants';
import ViewWrapper from 'src/components/view-wrapper';
import { screenNames, ScreenTitles } from 'src/constants/Navigation';
import iConstants from './FilterSettingsScreen.constants';
import styles from './FilterSettingsScreen.styles';

const FilterSettingsScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(
    DataFiltrationReducer,
    iConstants.initialState,
  );

  const onStorageRangeChangeHandler = (lowIndex, highIndex) => {
    if (
      state.storageRangeIndices.selectedHighIndex !== highIndex ||
      state.storageRangeIndices.selectedLowIndex !== lowIndex
    ) {
      dispatch({
        type: actions.STORAGE_CAPACITY,
        data: {
          selectedLowIndex: lowIndex,
          selectedHighIndex: highIndex,
        },
      });
    }
  };

  const onSetSelectionRamOption = (selectedRamArray) => {
    dispatch({
      type: actions.RAM_OPTION,
      data: selectedRamArray,
    });
  };

  const onHddValueChange = (value) => {
    dispatch({
      type: actions.HDD_OPTION,
      data: value,
    });
  };

  const onLocationValueChange = (value) => {
    dispatch({
      type: actions.LOCATION_OPTION,
      data: value,
    });
  };

  const navigateToFilteredServer = () => {
    navigation.navigate(screenNames.filterServer, { ...state });
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
          selectedRamOptions={state.ramOptions}
          setSelectedRamOption={onSetSelectionRamOption}
        />
        <HddSelection selected={state.hdd} onValueChange={onHddValueChange} />
        <LocationSelection
          selected={state.location}
          onValueChange={onLocationValueChange}
        />
        <Button
          label={iConstants.btnTextSearch}
          action={navigateToFilteredServer}
          sn={styles.FilterSettingsScreen_searchBtn}
        />
        <View style={styles.FilterSettingsScreen_paddedView} />
      </ViewWrapper>
    </>
  );
};

export default FilterSettingsScreen;
