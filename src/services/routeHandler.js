export const routeHandler = (navigateTo, jwt) => {
  if (jwt != null && Object.keys(jwt).length) {
    navigateTo("/home");
  }
};
