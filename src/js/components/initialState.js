import codeImage from '../assets/chris-ried-ieic5Tq8YMk-unsplash.jpg';

export const INIT_USER_CARD = {
  password: '',
  passwordConfirm: '',
  firstName: '',
  lastName: '',
  emailAddress: '',
  cart: {},
}

const dummyUser = {
  password: 'password1',
  firstName: 'Dummy',
  lastName: 'User',
  emailAddress: 'dummy@useremail.com',
  cart: {},
}

const processState = {
  cart: {
    isDisplayed: false,
  },
  confirm: {
    isDisplayed: false,
  },
  login: {
    isDisplayed: false,
  },
  payment: {
    isDisplayed: false,
  },
  progress: {
    isDisplayed: false,
  },
  shipping: {
    isDisplayed: false,
  },
  signUp: {
    isDisplayed: false,
  },
  store: {
    isDisplayed: true,
  },
}

export const storeItemTitles = [
  'html',
  'css',
  'javascript',
  'react',
];

const storeItems = {
  html: {
    title: 'HTML',
    image: codeImage,
    amountOfWork: 'Up to 500 lines of code',
    price: 149.99,
  },
  css: {
    title: 'CSS',
    image: codeImage,
    amountOfWork: 'Up to 250 lines of code',
    price: 199.99,
  },
  javascript: {
    title: 'JavaScript',
    image: codeImage,
    amountOfWork: 'Up to 200 lines of code',
    price: 299.99,
  },
  react: {
    title: 'React',
    image: codeImage,
    amountOfWork: 'Up to 300 lines of code',
    price: 499.99,
  },
}

export const initState = {
  isLoggedIn: false,
  currentUsers: {
    dummyUser
  },
  processState,
  storeItems,
}