import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';

import ThemingStore from 'utils/ThemingStore';
import Navigation from 'src/navigators';

const commonProps = {
  theme: ThemingStore.currentTheme,
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider {...commonProps}>
      <NavigationContainer {...commonProps}>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
