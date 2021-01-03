import { storageRangeSliderData } from 'src/constants/DataFiltrationConstants';

export default Object.freeze({
  btnTextSearch: 'Search',
  initialState: {
    storageRangeIndices: {
      selectedLowIndex: 0,
      selectedHighIndex: storageRangeSliderData.length - 1,
    },
    ramOptions: [],
    hdd: undefined,
    location: undefined,
  },
});
