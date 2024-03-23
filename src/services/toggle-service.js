import { myAxios, privateAxios } from "./helper";

export const getAllToggle = () => {
  return myAxios.get("/optitoggle/toggle").then((response) => {
    return response.data;
  });
};

export const createNewToggle = (toggle, userid) => {
  return privateAxios.post(`/optitoggle/user/${userid}/toggle`, toggle);
};

export const updateToggle = (toggle) => {
  return privateAxios
    .put(`/optitoggle/toggle/${toggle.flagId}`, toggle)
    .then((response) => {
      return response.data;
    });
};

export const deleteToggle = (flagid) => {
  return privateAxios
    .delete(`/optitoggle/toggle/${flagid}`)
    .then((response) => {
      return response.data;
    });
};
