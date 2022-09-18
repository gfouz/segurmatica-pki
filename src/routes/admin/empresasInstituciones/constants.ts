import axios from 'axios';

const BASE_URL = 'http://localhost:5000';
const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});
axiosApi.defaults.headers.common['Content-Type'] = 'application/json';

interface ISuggestedWords {
  id: string;
  name: string;
}
export const tip: ISuggestedWords = {
  name: 'nombre valido requerido.',
  id: 'solo numeros requeridos',
};
export const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '123456789'];
export const empresas = [
  'Universidad de Matanzas',
  'Facultad de Medicina de Cárdenas',
  'Empresa MICOM',
];
