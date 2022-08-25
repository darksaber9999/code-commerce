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

const storeItems = {
  HTML: {},
  CSS: {},
  JavaScript: {},
  React: {},
}

export const initState = {
  isLoggedIn: false,
  currentUsers: {
    dummyUser
  },
  processState,
  storeItems,
}