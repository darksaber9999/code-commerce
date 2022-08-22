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
    isDisplayed: true,
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
  signup: {
    isDisplayed: false,
  },
  store: {
    isDisplayed: false,
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