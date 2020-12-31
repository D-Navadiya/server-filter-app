import { styleCreator } from 'src/helpers';
import ThemingStore from 'utils/ThemingStore';

const { fontSizes, colors } = ThemingStore.currentTheme;

export default styleCreator({
  FieldTitle_container: {},
  FieldTitle_text: {
    textAlign: 'center',
    fontSize: fontSizes.large,
    color: colors.primary,
  },
});
