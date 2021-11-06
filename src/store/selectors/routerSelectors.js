export const getRouter = (state) => state.router;
export const getUriPath = (state) => getRouter(state).location.pathname;
