export const API = {
  AUTH: {
    SIGNIN_CREDENTIALS: "/api/auth/signin/credentials",
    SIGNIN_SOCIAL: "/api/auth/signin/social",
    SIGNOUT: "/api/auth/signout",
    SIGNUP_CREDENTIALS: "/api/auth/signup/credentials",
    SIGNUP_SOCIAL: "/api/auth/signup/social",
  },
} as const

export const ROUTE = {
  BUTTONS: "/buttons",
  HOME: "/",
  INPUTS: "/inputs",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
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
