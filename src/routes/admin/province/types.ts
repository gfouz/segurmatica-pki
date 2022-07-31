import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from "react-query";


export interface IFormInput {
    getProvince: string;
    setProvince: string;
  }   

export interface IProvinceResponse {
  id: string;
  name: string;
  enabled: boolean;
}   

const BASE_URL = 'http://localhost:5000/';

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

authApi.defaults.headers.common['Content-Type'] = 'application/json';

export async function getProvinces(url) {
    const { data } = await authApi.get<IProvinceResponse>(url);
    //console.log(`this is the data: ${data.map((item)=>item.name)}`)
    return data
}
    
export async function createProvince(data) {
    const { response } = await authApi.post<IProvinceResponse>('provincias',data);
    return response;
}


/*export const addProvince = useMutation((data)=> createProvince(data),
        {
            onSuccess: (data) => {

                queryClient.setQueryData(["provincias"], prev => prev.concat(data));
                queryClient.invalidateQueries('provincias');
            },
        }
    );


    */