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

export async function putRequestById(data: IFormInput, url: string, id: string) {
  try {
    const res = await axiosApi.put(`/${url}/${id}`, data);
    const result = res.data;
    return result;
  } catch (err) {
    return err;
  }
}

export async function getRequestEnabled(path: string) {
  try {
    const res = await axiosApi.get(path);
    const { data: result } = res;
    return result;
  } catch (err) {
    return err;
  }
}

export async function getRequestAll<IData>(path: string) {
  try {
    const res = await axiosApi.get(path);
    const result = res.data;
    return result;
  } catch (err) {
    return err;
  }
}

function errorHandler(error: unknown) {
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
  //console.log(error.message);
}
