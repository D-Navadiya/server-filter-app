import { styleCreator } from 'src/helpers';
import ThemingStore from 'utils/ThemingStore';

const { spacing } = ThemingStore.currentTheme;

export default styleCreator({
  RamSelection_container: {
    marginBottom: spacing,
  },
  RamSelection_fieldTitleContainer: {
    marginVertical: spacing,
  },
});
