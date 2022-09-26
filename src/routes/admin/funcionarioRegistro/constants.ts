import { ResponsiveValue } from '@chakra-ui/react';
import axios from 'axios';
import { IFormInput } from '../common/constants';

const BASE_URL = 'http://localhost:5000';
const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});
axiosApi.defaults.headers.common['Content-Type'] = 'application/json';

export interface IProps {
  url: string;
}

export interface IList {
  data: IFormInput;
}

export async function postRequest(path: string, data: IFormInput) {
  try {
    const res = await axiosApi.post<IFormInput>(path, data);
    const result = res?.data;
    return result;
  } catch (error) {
    return error;
  }
}

export async function putRequestById(
  data: IFormInput,
  url: string,
  id: string | any,
): Promise<IFormInput | any> {
  try {
    const res = await axiosApi.put(`/${url}/${id}`, data);
    const result = res.data;
    return result;
  } catch (err) {
    return err;
  }
}

export async function getRequestEnabled(path: string): Promise<IFormInput[] | any> {
  try {
    const res = await axiosApi.get(path);
    const { data: result } = res;
    return result;
  } catch (err) {
    return err;
  }
}

export async function getRequestAll(path: string): Promise<IFormInput[] | any> {
  try {
    const res = await axiosApi.get(path);
    const result = res.data;
    return result;
  } catch (err) {
    return err;
  }
}

/*-----------css styles and Chakra attributes types.--------*/
export type chakraProps = {
  size: ResponsiveValue<(string & unknown) | 'sm' | 'md' | 'lg' | 'xs'> | undefined;
  type: React.HTMLInputTypeAttribute | undefined;
  variant:
    | ResponsiveValue<(string & unknown) | 'outline' | 'flushed' | 'unstyled' | 'filled'>
    | undefined;
};

// HTML AND CHAKRA ATTRIBUTES
export const number_type: chakraProps = {
  size: 'sm',
  type: 'number',
  variant: 'flushed',
};
export const text_type: chakraProps = {
  size: 'sm',
  type: 'text',
  variant: 'flushed',
};
export const email_type: chakraProps = {
  size: 'sm',
  type: 'email',
  variant: 'flushed',
};
export const password_type: chakraProps = {
  size: 'sm',
  type: 'password',
  variant: 'flushed',
};

interface ISuggestedWords {
  id: string;
  name: string;
}
export const tip: ISuggestedWords = {
  name: 'nombre valido requerido.',
  id: 'solo numeros requeridos',
};
export const numbers = ['123456789'];
export const empresas = [
  'Universidad de Matanzas',
  'Facultad de Medicina de Cárdenas',
  'Empresa MICOM',
];
