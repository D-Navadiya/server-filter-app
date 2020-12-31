import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StatusBar from 'src/components/status-bar';
import AppHeader from 'src/components/app-header';
import { screenNames } from 'src/constants/Navigation';
import FilterServerScreen from 'src/screens/filter-server-screen';
import FilterSettingsScreen from 'src/screens/filter-settings-screen';
import styles, { implicitStyles } from './FilterServerStackNavigator.styles';

const Stack = createStackNavigator();

const FilterServerStackNavigator = () => {
  return (
    <>
      <StatusBar
        statusBarProps={implicitStyles.FilterServerStackNavigator_statusBar}
      />
      <Stack.Navigator
        headerMode="screen"
        initialRouteName={screenNames.filterSettings}
        screenOptions={{
          cardStyle: styles.FilterServerStackNavigator_card,
        }}
      >
        <Stack.Screen
          name={screenNames.filterSettings}
          component={FilterSettingsScreen}
          options={{ header: AppHeader }}
        />
        <Stack.Screen
          name={screenNames.filterServer}
          component={FilterServerScreen}
          options={{ header: AppHeader }}
        />
      </Stack.Navigator>
    </>
  );
};

export default FilterServerStackNavigator;
