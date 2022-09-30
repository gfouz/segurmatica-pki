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

