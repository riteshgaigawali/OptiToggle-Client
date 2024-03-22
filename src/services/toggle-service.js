import { myAxios, privateAxios } from "./helper";

export const getAllToggle = () => {
  return myAxios.get("/optitoggle/toggle").then((response) => {
    return response.data;
  });
};

export const updateToggle = (toggle) => {
  return privateAxios
    .put(`/optitoggle/toggle/${toggle.flagId}`, toggle)
    .then((response) => {
      return response.data;
    });
};
