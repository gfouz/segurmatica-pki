import axios from 'axios';
import { IFormInput } from '../common/constants';

const BASE_URL = 'http://localhost:5000';

const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});
axiosApi.defaults.headers.common['Content-Type'] = 'application/json';

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
  select: string;
}
export const info: ISuggestedWords = {
  name: 'se permiten nombres compuestos sin números',
  tel: 'números nacionales de 8 dígitos ',
  alpha: 'se permite letras, números y espacios',
  select: 'esta selección es requerida',
};

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
