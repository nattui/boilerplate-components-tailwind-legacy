export const API = {
  AUTH: {
    SIGNIN_CREDENTIALS: "/api/auth/signin/credentials",
    SIGNIN_SOCIAL: "/api/auth/signin/social",
    SIGNOUT: "/api/auth/signout",
    SIGNUP_CREDENTIALS: "/api/auth/signup/credentials",
    SIGNUP_SOCIAL: "/api/auth/signup/social",
  },
  DASHBOARD: {
    LIFE_EXPECTANCY: "/api/dashboard/life-expectancy",
  },
  PROFILE: {
    BIRTHDAY: "/api/profile/birthday",
    COUNTRY: "/api/profile/country",
    LIFE_EXPECTANCY: "/api/profile/life-expectancy",
  },
} as const

export const ROUTE = {
  BUTTONS: "/buttons",
  HOME: "/",
  INPUTS: "/inputs",
  LIFE_EXPECTANCY: "/life-expectancy",
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
      FAILED: "Failed to sign out.",
      SUCCESS: "You have successfully signed out.",
    },
    SIGNUP: {
      EMAIL_ALREADY_EXISTS: "An account with this email already exists.",
    },
  },
  GENERIC: {
    ERROR: "Something went wrong.",
  },
} as const

export const EXPIRATION_TIME_IN_SECONDS = 31_536_000 // 1 year
