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
  USERS: "/users",
} as const

export const MESSAGE = {
  AUTH: {
    SIGNIN: {
      INVALID_CREDENTIALS:
        "Please check your email and password and try again.",
      SUCCESS: "You have successfully signed in.",
    },
    SIGNOUT: {
      SUCCESS: "You have successfully signed out.",
    },
  },
} as const

export const EXPIRATION_TIME_IN_SECONDS = 31_536_000 // 1 year
