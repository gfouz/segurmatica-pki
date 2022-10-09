import * as React from 'react';
import axios from 'axios';
import { ResponsiveValue } from '@chakra-ui/react';

const BASE_URL = 'http://localhost:5000';

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

export type IFormInput = {
  id?: string;
  id2?: string;
  ci?: string | undefined;
  erId?: string;
  eiId?: string;
  name?: string;
  tome?: string;
  time?: string;
  price?: string;
  range?: string;
  folio?: string;
  rolId?: string;
  email?: string;
  phone?: string;
  namer?: string;
  namerCharger?: string;
  userId?: string;
  address?: string;
  enabled?: string;
  password?: string;
  nominationTemplate?: string;
  namerCharge?: string;
  provinciaId?: string;
  organismoId?: string;
  municipioId?: string;
  finalidadId?: string;
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
  ci: string;
  tome: string;
  folio: string;
  name: string;
  tel: string;
  file: string;
  tutor: string;
  occupancy: string;
  alpha: string;
  numeric: string;
  select: string;
  email: string;
  password: string;
  password2: string;
}
export const info: ISuggestedWords = {
  ci: 'Require 11 dígitos y ser mayor de 18 años!',
  tome: 'Requiere 4 dígitos para el tomo!',
  folio: 'Requeridos 4 dígitos para el folio!',
  name: 'Requiere nombres compuestos sin números',
  tel: 'Requiere números nacionales de 8 dígitos ',
  alpha: 'Requiere letras, números y espacios',
  select: 'esta selección es requerida',
  tutor: 'Este dato solo admite letras.',
  occupancy: 'Este dato solo admite letras',
  file: 'Adjunte documento del nombramiento',
  numeric: 'Requiere números enteros o decímales',
  email: 'Debe contener @ y un formato correcto',
  password: 'Letras, números y al menos 8 caracteres',
  password2: 'Require al menos una letra mayuscula y minuscula, números y minimo 8 caracteres',
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
  id: string | undefined,
): Promise<IFormInput | any> {
  try {
    const res = await axiosApi.put<IFormInput>(`/${path}/${id}`, data);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error.message;
  }
}
export async function getRequestById(
  path: string,
  id: string | undefined,
): Promise<IFormInput | any> {
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
