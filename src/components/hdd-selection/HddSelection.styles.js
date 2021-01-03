import { styleCreator } from 'src/helpers';
import ThemingStore from 'utils/ThemingStore';

const { spacing } = ThemingStore.currentTheme;

export default styleCreator({
  HddSelection_container: {
    marginBottom: spacing,
  },
  HddSelection_fieldText: {
    marginBottom: spacing,
  },
});
