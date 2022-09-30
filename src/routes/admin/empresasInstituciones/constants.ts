import axios from 'axios';
import { IFormInput } from '../common/constants';

const BASE_URL = 'http://localhost:5000';
const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});
axiosApi.defaults.headers.common['Content-Type'] = 'application/json';

interface ISuggestedWords {
  id: string;
  name: string;
  select: string;
}
export const info: ISuggestedWords = {
  name: 'se permiten nombres compuestos sin números',
  id: 'solo numeros requeridos',
  select: 'esta selección es requerida',
};
export const empresas = [
  'Universidad de Matanzas',
  'Facultad de Medicina de Cárdenas',
  'Empresa MICOM',
];

type ID = string | number | undefined;

export async function getByDoubleAssociation(id1: ID, id2: ID): Promise<IFormInput | any> {
  try {
    const res = await axiosApi.get<IFormInput>(
      `/empresas-instituciones/municipio/${id1}/organismo/${id2}`,
    );
    const result = res.data;
    return result;
  } catch (error: any) {
    return error.message;
  }
}
