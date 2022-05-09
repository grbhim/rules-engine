import {Lenders} from "src/services/lenders";

const localStorageKeyPrefix = 'rules';
let items = {};

function createDefault() {

  let lenderA = new Lenders();
  lenderA.name = 'lenderA';
  lenderA.interest_rate = 0.055;
  lenderA.monthly_fee = 40;
  lenderA.broker_fee = 0.02;

  store(lenderA.name, lenderA);

  let lenderB = new Lenders();
  lenderB.name = 'lenderB';
  lenderB.interest_rate = 0.09;
  lenderB.monthly_fee = 50;
  lenderB.broker_fee = 0.0175;

  store(lenderB.name, lenderB);

}

function addNew(lender) {
  store(lender.name, lender)
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
  createDefault,
  addNew,
  restore,
  getValue,
  hasKey,
  store
};
