import codeImageHTML from "../assets/valery-sysoev-p9OkL4yW3C8-unsplash.jpg"
import codeImageCSS from "../assets/nick-karvounis-TkZYCXmrKK4-unsplash.jpg"
import codeImageJS from "../assets/joan-gamell-XmZ4GDAp9G0-unsplash.jpg"
import codeImageReact from "../assets/ferenc-almasi-c8h0n7fSTqs-unsplash.jpg"


export const INIT_USER_CARD = {
  emailAddress: '',
  password: '',
  passwordConfirm: '',
  firstName: '',
  lastName: '',
  postalCode: null,
}

const dummyUser = {
  emailAddress: 'dummy@useremail.com',
  password: 'password1',
  firstName: 'Dummy',
  lastName: 'User',
  postalCode: 0,
  cart: [],
}

const processState = {
  authWindow: {
    isDisplayed: false,
  },
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
  signUp: {
    isDisplayed: false,
  },
  store: {
    isDisplayed: true,
  },
}

const storeItems = {
  html: {
    key: 1,
    title: 'HTML',
    image: codeImageHTML,
    amountOfWork: 'Up to 500 lines of code',
    price: 149.99,
  },
  css: {
    key: 2,
    title: 'CSS',
    image: codeImageCSS,
    amountOfWork: 'Up to 250 lines of code',
    price: 199.99,
  },
  javascript: {
    key: 3,
    title: 'JavaScript',
    image: codeImageJS,
    amountOfWork: 'Up to 200 lines of code',
    price: 299.99,
  },
  react: {
    key: 4,
    title: 'React',
    image: codeImageReact,
    amountOfWork: 'Up to 300 lines of code',
    price: 499.99,
  },
}

export const initState = {
  isLoggedIn: false,
  loggedInUser: {},
  currentUsers: [
    dummyUser
  ],
  processState,
  storeItems,
}