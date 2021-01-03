import { styleCreator } from 'src/helpers';
import ThemingStore from 'utils/ThemingStore';

const { fontSizes, colors } = ThemingStore.currentTheme;

export default styleCreator({
  FilterServerScreen_listEmptyComponent: {
    textAlign: 'center',
    fontSize: fontSizes.medium,
    color: colors.primary,
  },
  FilterServerScreen_flatlist__noData: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
