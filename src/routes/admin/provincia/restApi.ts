import axios from 'axios';

export interface IFormInput {
  name: string;
}

export type IProvince = {
  id: string;
  name: string;
  enabled: boolean;
};
interface IProvinceList {
  data: IProvince[];
}
const BASE_URL = 'http://localhost:5000/';

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

axiosApi.defaults.headers.common['Content-Type'] = 'application/json';

export async function getProvinces(): Promise<IProvinceList> {
  const { data } = await axiosApi.get<IProvinceList>('provincias');
  //console.log(`Estas son las provincias: ${data.map((item)=> item.name)}`);
  return data;
}

export async function getProvince(id: string): Promise<IProvince> {
  try {
    const { data } = await axiosApi.get<IProvince>(`provincias/${id}`);
    return data;
  } catch (err: any) {
    return err;
  }
}

export async function getById(): Promise<IProvince> {
  const format = (res) => {
    return JSON.stringify(res, null, 2);
  };

  if (id) {
    try {
      const res = await axiosApi.get<IProvince>(`${props.url}/${id}`);
      const result = {
        data: res.data,
        status: res.status,
        statusText: res.statusText,
        headers: res.headers,
      };
      setStatus(format(result));
    } catch (err) {
      setStatus(format(err.response?.data || err));
    }
  }
}

export async function createProvince(data: string): Promise<IProvince[]> {
  const { response } = await axiosApi.post<IProvince>('provincias', data);
  return response;
}

interface IToastOptions {
  position: string;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: undefined;
  toastId: number;
}
export const toastProps: IToastOptions = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  toastId: 1,
};

export function requestInfo(query: any, toast: any) {
  query.status == 'loading' && toast.warning('Buscando información!', { ...toastProps });
  query.status == 'error' && toast.warning('sucedio algún problema!', { ...toastProps });
}

export async function getRequest() {
  try {
    const res = await axiosApi.get('provincias');
    const result = {
      data: res.data,
      status: res.status,
      statusText: res.statusText,
    };
    return result.data;
  } catch (err) {
    //setStatus(format(err.response?.data || err));
  }
}
