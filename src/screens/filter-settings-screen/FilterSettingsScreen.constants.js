import { storageRangeSliderData } from 'src/constants/DataFiltrationConstants';

export default Object.freeze({
  btnTextSearch: 'Search',
  defaultSelectedRamOptions: [],
  defaultStorageRangeIndices: {
    selectedLowIndex: 0,
    selectedHighIndex: storageRangeSliderData.length - 1,
  },
});
