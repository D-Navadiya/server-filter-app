import * as actions from './actions';

export default (state, action) => {
  const { type, data } = action;

  switch (type) {
    case actions.STORAGE_CAPACITY:
      return {
        ...state,
        storageRangeIndices: data,
      };
    case actions.RAM_OPTION:
      return {
        ...state,
        ramOptions: data,
      };
    case actions.HDD_OPTION:
      return {
        ...state,
        hdd: data,
      };
    case actions.LOCATION_OPTION:
      return {
        ...state,
        location: data,
      };
    default:
      return state;
  }
};
