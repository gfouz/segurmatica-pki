import axios from 'axios';
import { IFormInput } from '../common/constants';

const BASE_URL = 'http://localhost:5000';

const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});
axiosApi.defaults.headers.common['Content-Type'] = 'application/json';

export const submitbtn = {
  m: '2em',
  color: '#222222',
  bg: '#ab8ffe',
  border: '1px solid #ab8ffe',
  size: 'md',
  type: 'submit',
};

export async function getRequestAll(path: string) {
  try {
    const res = await axiosApi.get(path);
    const result = res.data;
    return result;
  } catch (err) {
    return err;
  }
}

export async function getRequestById(path: string, id: string | any): Promise<IFormInput | any> {
  try {
    const res = await axiosApi.get(`/${path}/${id}`);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error.message;
  }
}

export async function putRequestById(
  data: IFormInput,
  path: string,
  _id: string | any,
): Promise<IFormInput | any> {
  try {
    const res = await axiosApi.put<IFormInput>(`/${path}/${_id}`, data);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error.message;
  }
}

export async function postRequest(path: string, data: IFormInput): Promise<IFormInput | any> {
  try {
    const res = await axiosApi.post<IFormInput>(path, data);
    const { data: result } = res;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}

interface ISuggestedWords {
  id: string;
  name: string;
}
export const tip: ISuggestedWords = {
  name: 'nombre valido requerido.',
  id: 'solo numeros requeridos',
};
export const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '123456789'];
export const councils = [
  'Chaparra',
  'Amancio',
  'Jobabo',
  'Puerto Padre',
  'Vasques',
  'Colombia',
  'Delicias',
  'Gibara',
  'Alcides Pino',
  'Rafael Freire',
  'Moa',
];
