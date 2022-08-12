import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';

const url = 'http://localhost:4000/login';

interface IParams {
  user?: string;
  password?: string;
}

export function login(url: string, params: IParams, navigate: NavigateFunction) {
  axios
    .post(url, params)
    .then(function (response) {
      localStorage.setItem('auth', response.data.token);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getToken = async (params: IParams) => {
  const { data } = await axios.post(url, params);
  //localStorage.setItem("auth", data.token);
  return data;
};
