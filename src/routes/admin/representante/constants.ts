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
  id: string;
  ci: string;
  eiId: string;
  userId: string;
  name: string;
  tome: string;
  folio: string;
  phone: string;
  namer: string;
  enabled: string;
  namerCharge: string;
  nominationTemplate: string;
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
  tome: string;
  folio: string;
  name: string;
  phone: string;
  tutor: string;
  occupancy: string;
  file: string;
}
export const tip: Itip = {
  ci: 'requerido 11 dígitos y ser mayor de 18 años!',
  tome: 'requeridos 4 dígitos para el tomo!',
  folio: 'requeridos 4 dígitos para el folio!',
  name: 'el nombre solo admite letras',
  phone: '8 dígitos requeridos para nro de teléfono',
  tutor: 'el nombre solo admite letras.',
  occupancy: 'este dato solo admite letras',
  file: 'adjunte documento del nombramiento',
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
export const file_type: chakraProps = {
  size: 'sm',
  type: 'file',
  variant: 'flushed',
};


export async function postRequest(path: string, data: IFormInput): Promise<IFormInput | any> {
  try {
    const res = await axiosApi.post<IFormInput>(path, data);
    const { data: result } = res;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}



export async function putRequestById(
  data: IFormInput,
  path: string,
  id: string | any,
): Promise<IFormInput | any> {
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



export async function getRequestEnabled(path: string): Promise<IFormInput[] | any> {
  try {
    const res = await axiosApi.get<IFormInput[]>(path);
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
