import {Lenders} from "src/services/lenders";

const localStorageKeyPrefix = 'rules';
let items = {};

function create() {

  let lenderA = new Lenders();
  lenderA.interest_rate = 0.055;
  lenderA.monthly_fee = 40;
  lenderA.broker_fee = 0.02;

  store('lenderA', lenderA);

  let lenderB = new Lenders();
  lenderB.interest_rate = 0.09;
  lenderB.monthly_fee = 50;
  lenderB.broker_fee = 0.0175;

  store('lenderB', lenderB);

}

function restore() {
  const json = localStorage.getItem(localStorageKeyPrefix);
  items = (json) ? JSON.parse(json) : {};

  return items;
}
function getValue(key) {
  return this.hasKey(key) ? items[key] : undefined;
}
function hasKey(key) {
  return items.hasOwnProperty(key);
}
function store(key, data) {
  items[key] = data;
  localStorage.setItem(localStorageKeyPrefix, JSON.stringify(items));

  return this;
}

export const LocalStorageService = {
  create,
  restore,
  getValue,
  hasKey,
  store
};
