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

 