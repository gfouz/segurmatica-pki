import axios from 'axios';

const BASE_URL = 'http://localhost:5000';
const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});
axiosApi.defaults.headers.common['Content-Type'] = 'application/json';

export interface IFormInput {
  id: string;
  email: string;
  password: string;
  rolid: string;
  enabled: boolean;
}

export interface IProps {
  id: string;
  url: string;
  labelForId: string;
  labelForName: string;
}
export const submitbtn = {
  m: '2em',
  color: '#222222',
  bg: '#ab8ffe',
  border: '1px solid #ab8ffe',
  size: 'md',
  type: 'submit',
};

type IUser = {
  email: string;
  password: string;
  rolid: number;
};
interface IData {
  data: IUser[];
}

export async function postRequest(path: string, data: IFormInput) {
  try {
    const res = await axiosApi.post<IUser>(path, data);
    const result = res?.data;
    return result;
  } catch (error) {
    return error;
  }
}

export async function putRequestById(data: IFormInput, url: string, id: string) {
  try {
    const res = await axiosApi.put(`/${url}/${id}`, data);
    const result = res.data;
    return result;
  } catch (err) {
    return err;
  }
}

export async function getRequestEnabled(path: string) {
  try {
    const res = await axiosApi.get(path);
    const { data: result } = res;
    return result;
  } catch (err) {
    return err;
  }
}

export async function getRequestAll<IData>(path: string) {
  try {
    const res = await axiosApi.get(path);
    const result = res.data;
    return result;
  } catch (err) {
    return err;
  }
}

interface ISuggestedWords {
  id: string;
  name: string;
  email: string;
  password: string;
}
export const tip: ISuggestedWords = {
  name: 'nombre valido requerido.',
  id: 'solo numeros requeridos',
  email: 'Debe contener @ y un formato correcto',
  password: 'Debe tener 1 letra mayuscula y minuscula, 1 número y al menos 8 caracteres',
};
