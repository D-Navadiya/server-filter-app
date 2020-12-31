import { styleCreator } from 'src/helpers';
import ThemingStore from 'utils/ThemingStore';

const { colors } = ThemingStore.theme;

export const implicitStyles = {
  FilterServerStackNavigator_statusBar: {
    backgroundColor: colors.background,
    barStyle: 'dark-content',
  },
};

export default styleCreator({
  FilterServerStackNavigator_card: {
    backgroundColor: colors.background,
  },
});
