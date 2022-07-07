import axios from "axios";
import { NavigateFunction } from "react-router-dom";

interface IParams {
  user?: string;
  password?: string;
}

export function login(
  url: string,
  params: IParams,
  navigate: NavigateFunction
) {
  axios
    .post(url, params)
    .then(function (response) {
      localStorage.setItem("auth", response.data.token);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const auth = async (url: string, params: IParams) => {
  const { data } = await axios.post(url, params);
  localStorage.setItem("auth", data.token);
  /*setTimeout(()=>{
    navigate("/");
  }, 3000);*/
  return data;
};
