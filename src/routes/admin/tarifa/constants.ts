import axios from 'axios';
import { chakraProps } from '../common/constants';

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

interface ISuggestedWords {
  id: string;
  name: string;
}
export const tip: ISuggestedWords = {
  name: 'nombre valido requerido.',
  id: 'solo numeros requeridos',
};
