
export enum MainAppState {
  IDLE = 1,
  LOGIN = 2,
  AUTHENTICATING = 3,
  AUTHENTICATED = 4,
  AUTHENTICATION_FAILED = 5,
  ERORR = 99,
}

export enum MainAppMode {
  NONE = 0,
  BEXIO = 1
}

export interface MainApp {
  state: MainAppState,
  mode: MainAppMode
}
