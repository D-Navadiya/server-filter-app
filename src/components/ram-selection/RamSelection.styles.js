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
  RamSelection_ramOptionsViewContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  RamSelection_ramOptionViewContainer: { width: '50%' },
});
