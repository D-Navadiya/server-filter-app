import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { styleCreator } from 'src/helpers';
import ThemingStore from 'utils/ThemingStore';

const { colors, fontSizes, spacing } = ThemingStore.currentTheme;

export default styleCreator({
  CustomSlider_container: {
    marginBottom: spacing,
  },
  CustomSlider_horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing / 2,
  },
  CustomSlider_fieldTitleContainer: {
    marginTop: spacing,
  },
  CustomSlider_labelText: {
    width: wp('10%'),
    textAlign: 'center',
    color: colors.primary,
    fontSize: fontSizes.medium,
  },
});
