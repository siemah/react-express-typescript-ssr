export interface UserContext {
  fullname: string;
  role: string;
}

export interface StateContext {
  user?: UserContext;
  data?: object[];
}
export interface ReactRouterContextType {
  url?: string;
  state?: StateContext;
}