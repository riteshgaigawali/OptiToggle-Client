// isLoggedIn
export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data != null) {
    return true;
  } else {
    return false;
  }
};

// doLogin - store token to localStorage

export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};

//doLogout - remove token from localStorage
export const doLogout = (next) => {
  localStorage.removeItem("data");
  next();
};
// getCurrentUser Logged In
export const getCurrentUser = () => {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("data"))?.userDtoResponse;
  } else {
    return undefined;
  }
};
