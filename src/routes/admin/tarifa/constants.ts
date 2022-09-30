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

export const range_type: chakraProps = {
  size: 'sm',
  type: 'text',
  variant: 'flushed',
};
