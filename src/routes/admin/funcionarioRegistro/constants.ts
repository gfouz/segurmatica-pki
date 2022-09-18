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

function errorHandler(error: any) {
  if (error === null) throw new Error('Unrecoverable error!! Error is null!');
  if (axios.isAxiosError(error)) {
    //here we have a type guard check, error inside this if will be treated as AxiosError
    const response = error?.response;
    const request = error?.request;
    const config = error?.config; //here we have access the config used to make the api call (we can make a retry using this conf)

    if (error.code === 'ERR_NETWORK') {
      console.log('connection problems..');
    } else if (error.code === 'ERR_CANCELED') {
      console.log('connection canceled..');
    }
    if (response) {
      //The request was made and the server responded with a status code that falls out of the range of 2xx the http status code mentioned above
      const statusCode = response?.status;
      if (statusCode === 404) {
        console.log('The requested resource does not exist or has been deleted');
      } else if (statusCode === 401) {
        console.log('Please login to access this resource');
        //redirect user to login
      }
    } else if (request) {
      //The request was made but no response was received, `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in Node.js
    }
  }
  //Something happened in setting up the request and triggered an Error
  console.log(error.message);
}
