import { styleCreator, convertHexToRgbA } from 'src/helpers';
import ThemingStore from 'utils/ThemingStore';

const { spacing, colors, fontSizes } = ThemingStore.currentTheme;

export default styleCreator({
  Checkbox_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing / 2,
    borderRadius: 20,
    paddingRight: spacing,
    marginHorizontal: 2,
    backgroundColor: convertHexToRgbA(colors.primaryAccent, 15),
    flex: 1,
  },
  Checkbox_touchableOpacity: {
    flex: 1,
  },
  Checkbox_labelText: {
    color: colors.secondaryAccent,
    fontSize: fontSizes.medium,
    marginLeft: spacing,
  },
});
