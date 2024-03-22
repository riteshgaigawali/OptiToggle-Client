import { myAxios, privateAxios } from "./helper";
export const singUp = (user) => {
  return myAxios
    .post("/api/v1/auth/register", user)
    .then((response) => response.data);
};

export const loginUser = (loginDetails) => {
  return myAxios
    .post("/api/v1/auth/login", loginDetails)
    .then((response) => response.data);
};

export const getAllUsers = () => {
  return myAxios.get("/optitoggle/users").then((response) => {
    return response.data;
  });
};

export const createNewUser = (user) => {
  return privateAxios.post("/optitoggle/users", user).then((response) => {
    return response.data;
  });
};

export const deleteUser = (userid) => {
  return privateAxios.delete(`/optitoggle/users/${userid}`).then((response) => {
    return response.data;
  });
};

export const updateUser = (user, userid) => {
  return privateAxios
    .put(`/optitoggle/users/${userid}`, user)
    .then((response) => {
      return response.data;
    });
};
