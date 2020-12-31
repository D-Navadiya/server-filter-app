import React from 'react';
import { Appbar } from 'react-native-paper';
import { Image } from 'react-native';

import images from 'assets/images';
import styles from './AppHeader.styles';

const AppHeader = () => {
  return (
    <Appbar.Header style={styles.AppHeader}>
      <Image
        source={images.HeaderLogo}
        resizeMode="contain"
        style={styles.AppHeader_imageLogo}
      />
    </Appbar.Header>
  );
};

export default AppHeader;
