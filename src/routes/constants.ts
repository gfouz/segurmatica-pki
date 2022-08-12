import * as React from 'react';
import { ResponsiveValue } from '@chakra-ui/react';
import { FieldErrors, ValidationRule } from 'react-hook-form';

//____________functions to handle dates and time_____________//
function turnToInt(value: number | string, start: number, end: number) {
  return parseInt(value.toString().substring(start, end));
}
let currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
currentYear = turnToInt(currentYear, 2, 4);

/*-----------------Dates validations and limits on time.------------*/
export interface IDates {
  isgrownup: (id: string) => boolean;
  monthover: (id: string) => boolean;
  monthunder: (id: string) => boolean;
  dayover: (id: string) => boolean;
  dayunder: (id: string) => boolean;
}

/*-----------Object of callback functions that receive the input value as args--------*/
export const dates: IDates = {
  isgrownup: (id) =>
    (currentYear - turnToInt(id, 0, 2) == 18 && currentMonth > turnToInt(id, 2, 4)) ||
    (currentYear > turnToInt(id, 0, 2) && currentYear - turnToInt(id, 0, 2) > 18) ||
    (currentYear < turnToInt(id, 0, 2) && turnToInt(id, 0, 2) < 99),
  monthover: (id) => parseInt(id.substring(2, 4)) >= 1,
  monthunder: (id) => parseInt(id.substring(2, 4)) <= 12,
  dayover: (id) => parseInt(id.substring(4, 6)) >= 1,
  dayunder: (id) => parseInt(id.substring(4, 6)) <= 31,
};

export interface IFormInput {
  //these are also! nominals for register props.
  id: string;
  tel: string;
  tomo: string;
  cargo: string;
  folio: string;
  email: string;
  empresas: string[];
  entidades: string[];
  organismos: string[];
  representante: string;
  condiciones: boolean;
}

export const ORGANISMOS: string[] = ['PCC', 'MININT', 'FAR', 'MTSS', 'MINCIN', 'MEP'];

export const EMPRESAS: string[] = ['ETECSA', 'UNE', 'DPT', 'FCBC', 'UMCC', 'ITH'];

export const ENTIDADES: string[] = ['BANDEC', 'BPA'];

export interface IFormInput {
  //these are also! nominals for register props.
  id: string;
  dn: string;
  renewal: string;
  revocation: string;
  motive: string;
  policy: string;
}

/*__________________Inputs validations.__________________*/
export interface IAttributes {
  required?: ValidationRule<boolean> | string | undefined;
  maxLength?: ValidationRule<number> | undefined;
  minLength?: ValidationRule<number> | undefined;
}
export const ci_terms: IAttributes = {
  required: true,
  maxLength: 11,
  minLength: 11,
};
export const dn_terms: IAttributes = {
  required: true,
  maxLength: 4,
  minLength: 4,
};
export const motive_terms: IAttributes = {
  required: true,
};

/*-----------css styles and Chakra attributes types.--------*/
export type chakraProps = {
  size: ResponsiveValue<(string & {}) | 'sm' | 'md' | 'lg' | 'xs'> | undefined;
  type: React.HTMLInputTypeAttribute | undefined;
  variant:
    | ResponsiveValue<(string & {}) | 'outline' | 'flushed' | 'unstyled' | 'filled'>
    | undefined;
};

// HTML AND CHAKRA ATTRIBUTES
export const number_type: chakraProps = {
  size: 'sm',
  type: 'number',
  variant: 'flushed',
};
export const text_type: chakraProps = {
  size: 'sm',
  type: 'text',
  variant: 'flushed',
};

// ALERT MESSAGES OR TOASTS TO SHOW .
interface ITooltip {
  ci: string;
  dn: string;
  motive: string;
  province: string;
}
export const tooltips: ITooltip = {
  province: 'Escriba algún nombre de provincia.',
  ci: 'Solo 11 dígitos y ser mayor de 18!',
  dn: 'Número de serie es requerido!',
  motive: 'Motivo de revocación es requerido!',
};

type errors = {
  id?: FieldErrors | undefined;
  dn?: FieldErrors | undefined;
  tel?: FieldErrors | undefined;
  tomo?: FieldErrors | undefined;
  folio?: FieldErrors | undefined;
  email?: FieldErrors | undefined;
};

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

export const toastOptions: IToastOptions = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  toastId: 1,
};

export function alertMessage(err: errors, toast: any) {
  err.id &&
    toast.warning('Nro de carnet de identidad es 11 dígitos y ser mayor de 18 años', {
      ...toastOptions,
    });
  err.tomo && toast.warning('Tomo admite 4 números!', { ...toastOptions });
  err.folio && toast.warning('Folio admite 4 números!', { ...toastOptions });
  err.email && toast.warning('Email formato incorrecto!', { ...toastOptions });
  err.tel && toast.warning('Nro de teléfono requerido!', { ...toastOptions });
  err.dn && toast.warning('Nro de serie es requerido!', { ...toastOptions });
}

export const theme = {
  green: 'linear-gradient(to right, #222222, #9900FF );',
  rainbow: 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);',
};

//Data list for input component autocomplete.
export const provinces = [
  'Pinar del Río',
  'Habana',
  'Matanzas',
  'Ciego de Ávila',
  'Ciefuegos',
  'Camaguey',
  'Las Tunas',
  'Holguin',
  'Granma',
  'Santiago',
  'Guantanamo',
];
