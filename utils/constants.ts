export const API = {
  AUTH: {
    SIGNIN: "/api/auth/signin",
    SIGNOUT: "/api/auth/signout",
    SIGNUP: "/api/auth/signup",
  },
} as const

export const ROUTE = {
  BUTTONS: "/buttons",
  HOME: "/",
  INPUTS: "/inputs",
  SIGNIN: "/signin",
} as const

export const MESSAGE = {
  AUTH: {
    SIGNIN: {
      SUCCESS: "You have successfully signed in.",
    },
    SIGNOUT: {
      SUCCESS: "You have successfully signed out.",
    },
  },
} as const
