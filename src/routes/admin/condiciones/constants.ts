import * as React from 'react';
import axios, { AxiosResponse } from 'axios';

export interface ITerms {
  condiciones: string;
}

const BASE_URL = 'http://localhost:5000';
const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});
axiosApi.defaults.headers.common['Content-Type'] = 'application/json';

export async function getRequestAll(path: string): Promise<ITerms | any> {
  try {
    const res = await axiosApi.get<ITerms>(path);
    const result = res.data;
    return result;
  } catch (error) {
    return error;
  }
}

export async function postRequest(path: string, data: ITerms) {
  try {
    const res = await axiosApi.post<ITerms>(path, data);
    const { data: result } = res;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}
