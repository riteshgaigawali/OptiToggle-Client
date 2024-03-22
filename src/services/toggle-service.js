import { myAxios, privateAxios } from "./helper";

export const getAllToggle = () => {
  return myAxios.get("/optitoggle/toggle").then((response) => {
    return response.data;
  });
};
