import { styleCreator } from 'src/helpers';
import ThemingStore from 'utils/ThemingStore';

const { spacing } = ThemingStore.currentTheme;

export default styleCreator({
  LocationSelection_container: {
    marginBottom: spacing,
  },
  LocationSelection_fieldText: {
    marginBottom: spacing,
  },
  LocationSelection_customDropdown: {
    width: '65%',
  },
});
