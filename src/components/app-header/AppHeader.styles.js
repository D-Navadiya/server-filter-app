import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { styleCreator } from 'src/helpers';
import ThemingStore from 'utils/ThemingStore';

const { colors } = ThemingStore.currentTheme;

export default styleCreator({
  AppHeader: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  AppHeader_imageLogo: {
    width: wp('45%'),
  },
});
