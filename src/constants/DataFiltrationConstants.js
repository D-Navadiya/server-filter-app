export const storageUnits = Object.freeze({
  gb: 'GB',
  tb: 'TB',
});

export const storageRangeSliderData = Object.freeze([
  {
    type: undefined,
    value: 0,
  },
  {
    type: storageUnits.gb,
    value: 250,
  },
  {
    type: storageUnits.gb,
    value: 500,
  },
  {
    type: storageUnits.tb,
    value: 1,
  },
  {
    type: storageUnits.tb,
    value: 2,
  },
  {
    type: storageUnits.tb,
    value: 3,
  },
  {
    type: storageUnits.tb,
    value: 4,
  },
  {
    type: storageUnits.tb,
    value: 8,
  },
  {
    type: storageUnits.tb,
    value: 12,
  },
  {
    type: storageUnits.tb,
    value: 24,
  },
  {
    type: storageUnits.tb,
    value: 48,
  },
  {
    type: storageUnits.tb,
    value: 72,
  },
]);

export const ramOptions = Object.freeze([2, 4, 8, 12, 16, 24, 32, 48, 64, 96]);

export const staticListKeys = Object.freeze({
  accessArrayKey: 'static-server-list',
});

export const dataKeys = Object.freeze({
  model: 'Model',
  ram: 'RAM',
  hdd: 'HDD',
  location: 'Location',
  price: 'Price',
});

export const columns = Object.freeze([
  { key: dataKeys.model, name: 'MODEL' },
  { key: dataKeys.ram, name: 'RAM' },
  { key: dataKeys.hdd, name: 'HDD' },
  { key: dataKeys.location, name: 'LOCATION' },
  { key: dataKeys.price, name: 'PRICE', numeric: true },
]);
