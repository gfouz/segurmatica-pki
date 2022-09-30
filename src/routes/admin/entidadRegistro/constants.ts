import axios from 'axios';

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

type IUser = {
  email: string;
  password: string;
  rolid: number;
};
interface IData {
  data: IUser[];
}

interface ISuggestedWords {
  id: string;
  name: string;
  select: string;
}
export const info: ISuggestedWords = {
  name: 'se permiten nombres compuestos sin números',
  id: 'solo numeros requeridos',
  alpha: 'permite letras, números y espacios',
  select: 'esta selección es requerida',
};
