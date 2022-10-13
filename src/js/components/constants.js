import VISA_ICON from '../assets/visa.png';
import AMERICAN_EXPRESS_ICON from '../assets/amex.png';
import MASTERCARD_ICON from '../assets/masterCard.png';
import DISCOVER_ICON from '../assets/discover.png';

export const displayNames = {
  authWindow: 'authWindow',
  cart: 'cart',
  confirm: 'confirm',
  login: 'login',
  payment: 'payment',
  progress: 'progress',
  shipping: 'shipping',
  signUp: 'signUp',
  store: 'store',
};

export const storeItemTitles = [
  'html',
  'css',
  'javascript',
  'react',
  'everything',
];

export const OTHERCARDS = [
  /[1-9]/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const AMERICANEXPRESS = [
  /[1-9]/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const CARD = [
  'VISA',
  'MASTERCARD',
  'AMERICAN_EXPRESS',
  'DISCOVER'
];

export const CARDICON = {
  VISA: VISA_ICON,
  MASTERCARD: MASTERCARD_ICON,
  AMERICAN_EXPRESS: AMERICAN_EXPRESS_ICON,
  DISCOVER: DISCOVER_ICON,
};