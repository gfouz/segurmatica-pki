import * as React from 'react';
import axios from 'axios';
import { ResponsiveValue } from '@chakra-ui/react';

const BASE_URL = 'http://localhost:5000';

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

export type IFormInput = {
  id?: string | number;
  id2?: string;
  ci?: string | undefined;
  erId?: string | number;
  eiId?: number;
  name?: string;
  tome?: number;
  time?: number;
  price?: number;
  range?: string;
  folio?: number;
  rolId?: number;
  email?: string;
  phone?: string;
  namer?: string;
  namerCharger?: string;
  userId?: number;
  address?: string;
  enabled?: boolean;
  password?: string;
  nominationTemplate?: string;
  namerCharge?: string;
  provinciaId?: number;
  organismoId?: number;
  municipioId?: number;
  finalidadId?: number;
};

export type IStoreProps = IFormInput;
export type IList = IFormInput;

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
  url?: string;
  label?: string;
  queryKey?: string;
  labelForId?: string;
  labelForName?: string;
}

interface ISuggestedWords {
  id: string;
  name: string;
  select: string;
}
export const info: ISuggestedWords = {
  name: 'requiere nombres compuestos sin números',
  tel: 'requiere números nacionales de 8 dígitos ',
  alpha: 'requerido letras, números y espacios',
  select: 'esta selección es requerida',
  numeric: 'requiere números enteros o decímales',
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
export const range_type: chakraProps = {
  size: 'sm',
  type: 'text',
  variant: 'flushed',
};
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
export async function getRequestById(path: string, id: string): Promise<IFormInput | any> {
  try {
    const res = await axiosApi.get<IFormInput>(`/${path}/${id}`);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error.message;
  }
}

export async function getByParams(path: string, params: string): Promise<IFormInput | any> {
  try {
    const res = await axiosApi.get<IFormInput>(`/${path}/${params}`);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error.message;
  }
}

/* Do not repeat yourself, but here is a kind of
     convention. */
export async function getRequestEnabled(path: string): Promise<IFormInput[] | any> {
  try {
    const res = await axiosApi.get<IFormInput[]>(path);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error.message;
  }
}

export async function getRequestAll(path: string): Promise<IFormInput[] | any> {
  try {
    const res = await axiosApi.get<IFormInput[]>(path);
    const result = res.data;
    return result;
  } catch (error) {
    return error;
  }
}

export async function getByDoubleAssociation(id1: string, id2: string): Promise<IFormInput | any> {
  try {
    const res = await axiosApi.get<IFormInput>(
      `/empresas-instituciones/municipio/${id1}/organismo/${id2}`,
    );
    const result = res.data;
    return result;
  } catch (error: any) {
    return error.message;
  }
}

export const getServerMessage = (
  message: any,
  setStatus: { (value: React.SetStateAction<string>): void; (arg0: any): void },
) => {
  setStatus(message);
};
