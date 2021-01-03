import { styleCreator, convertHexToRgbA } from 'src/helpers';
import ThemingStore from 'utils/ThemingStore';

const { colors } = ThemingStore.currentTheme;

export default styleCreator({
  CustomDropdown_container: { justifyContent: 'center', alignItems: 'center' },
  CustomDropdown_pickerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 30,
    backgroundColor: convertHexToRgbA(colors.primaryAccent, 15),
  },
  CustomDropdown_picker: {
    height: 45,
    width: '100%',
    color: colors.secondaryAccent,
  },
});
