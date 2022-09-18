import * as React from 'react';
import axios, { AxiosResponse } from 'axios';
import { ResponsiveValue } from '@chakra-ui/react';

const BASE_URL = 'http://localhost:5000';
const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});
axiosApi.defaults.headers.common['Content-Type'] = 'application/json';

export type IFormInput = {
  id?: number;
  ci?: number;
  erId?: number;
  eiId?: number;
  name?: string;
  tome?: number;
  time?: number;
  price?: number;
  range?: string;
  folio?: number;
  rolid?: number;
  email?: string;
  phone?: string;
  namer?: string;
  userId?: number;
  name_pattern?: string;
  address?: string;
  enabled?: boolean;
  password?: string;
  namerCharge?: string;
  provinciaId?: number;
  organismoId?: number;
  municipioId?: number;
  finalidadId?: number;
};

export type IStoreProps = IFormInput;
export type IList = IFormInput;

interface IAxiosData {
  information: IFormInput[];
}
//Types for FormsIterator
export interface IFormList {
  form: TForm[];
}
type TForm = {
  option: string;
  comp: React.ReactNode;
};
//---------------------//

export interface IProps {
  id?: string;
  url: string;
  label?: string;
  queryKey?: string;
  labelForId?: string;
  labelForName?: string;
}

interface Itip {
  ci: string;
  dn: string;
  motive: string;
  numbers: string;
  text: string;
}
export const tip: Itip = {
  ci: 'Solo 11 dígitos y ser mayor de 18!',
  dn: 'Número de serie es requerido!',
  motive: 'Motivo de revocación es requerido!',
  numbers: 'numeros validos requeridos.',
  text: 'Es requerido escribir en este campo. ',
};

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
export const file_type: chakraProps = {
  size: 'sm',
  type: 'file',
  variant: 'flushed',
};

export async function postRequest(path: string, data: IFormInput) {
  try {
    const res = await axiosApi.post<IFormInput>(path, data);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}

export async function putRequestById(data: IFormInput, path: string, id: string) {
  try {
    const res = await axiosApi.put<IFormInput>(`/${path}/${id}`, data);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error.message;
  }
}
export async function getRequestById(path: string, id: string) {
  try {
    const res = await axiosApi.get<IFormInput>(`/${path}/${id}`);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error.message;
  }
}

/* Do not repeat yourself, but here is a kind of
     convention. */
export async function getRequestEnabled(path: string) {
  try {
    const res = await axiosApi.get<IAxiosData>(path);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error.message;
  }
}

export async function getRequestAll(path: string) {
  try {
    const res = await axiosApi.get<IAxiosData>(path);
    const result = res.data;
    return result;
  } catch (error) {
    return error;
  }
}

export const numbersList = ['75062418781'];
