import { ResponsiveValue } from '@chakra-ui/react';
import { FieldErrors, UseFormRegister, ValidationRule } from 'react-hook-form';
import * as React from 'react';
import { CSSObject } from 'styled-components';

//____________functions to handle dates and time_____________//
function turnToInt(value: number | string, start: number, end: number) {
  return parseInt(value.toString().substring(start, end));
}
let currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
currentYear = turnToInt(currentYear, 2, 4);

export type chakraAttributes = {
  size: ResponsiveValue<(string & {}) | 'sm' | 'md' | 'lg' | 'xs'> | undefined;
  type: React.HTMLInputTypeAttribute | undefined;
  variant:
    | ResponsiveValue<(string & {}) | 'outline' | 'flushed' | 'unstyled' | 'filled'>
    | undefined;
};

/*------------types of data that is sent by the form--------------*/
export type IFormInput = {
  id: string;
  ci: string;
  eiId: string;
  email: string;
  phone: string;
  userId: string;
  name: string;
  tome: string;
  folio: string;
  cargo: string;
  namer: string;
  enabled: string;
  entidades: string;
  empresas: string;
  condiciones: string;
  representante: string;
  organismos: string;
  namerCharge: string;
  nominationTemplate: string;
};
/*-----------------Literal types for registering inputs-------------------*/
export type ILabel =
  | 'id'
  | 'dn'
  | 'tel'
  | 'tomo'
  | 'terms'
  | 'folio'
  | 'email'
  | 'user'
  | 'motive'
  | 'usertype'
  | 'password';

interface InputProps {
  //idEvt: (e: React.ChangeEvent<HTMLInputElement>) => void;
  list?: string;
  color?: string;
  datalist?: string[];
  label: ILabel;
  pattern?: RegExp;
  message?: string;
  htmlAttributes: chakraAttributes;
  register?: UseFormRegister<IFormInput>;
  placeholder?: string | undefined;
  _placeholder?: CSSObject | undefined;
  requirements?: IAttributes;
  validations?: IDates;
}

export const ORGANISMOS: string[] = ['PCC', 'MININT', 'FAR', 'MTSS', 'MINCIN', 'MEP'];

export const EMPRESAS: string[] = ['ETECSA', 'UNE', 'DPT', 'FCBC', 'UMCC', 'ITH'];

export const ENTIDADES: string[] = ['BANDEC', 'BPA'];

export const REPRESENTANTES: string[] = ['Gilberto Alejandro Acosta', 'Giovani Fouz Jiménez'];

/*-----------css styles and Chakra attributes types.--------*/
export type chakraProps = {
  size: ResponsiveValue<(string & {}) | 'sm' | 'md' | 'lg' | 'xs'> | undefined;
  type: React.HTMLInputTypeAttribute | undefined;
  variant:
    | ResponsiveValue<(string & {}) | 'outline' | 'flushed' | 'unstyled' | 'filled'>
    | undefined;
};

/*-----------------Dates validations and limits on time.------------*/
export interface IDates {
  is_grownup: (ci: string) => boolean;
  top_month: (ci: string) => boolean;
  month_down: (ci: string) => boolean;
  top_day: (ci: string) => boolean;
  day_down: (ci: string) => boolean;
}

/*-----------Object of callback functions that receive the input value as args--------*/
export const dates: IDates = {
  is_grownup: (ci) =>
    (currentYear - turnToInt(ci, 0, 2) == 18 && currentMonth > turnToInt(ci, 2, 4)) ||
    (currentYear > turnToInt(ci, 0, 2) && currentYear - turnToInt(ci, 0, 2) > 18) ||
    (currentYear < turnToInt(ci, 0, 2) && turnToInt(ci, 0, 2) < 99),
  top_month: (ci) => parseInt(ci.substring(2, 4)) >= 1,
  month_down: (ci) => parseInt(ci.substring(2, 4)) <= 12,
  top_day: (ci) => parseInt(ci.substring(4, 6)) >= 1,
  day_down: (ci) => parseInt(ci.substring(4, 6)) <= 31,
};

/* data that must come from users */
interface IState {
  id: string;
  tel: string;
  tomo: string;
  color: string;
  cargo: string;
  folio: string;
  email: string;
  warning: string;
  empresas: string;
  entidades: string;
  organismos: string;
  representante: string;
  condiciones: boolean;
}
/*----------Full form state-------*/
export const initialState: IState = {
  id: '',
  tel: '',
  tomo: '',
  color: '#000000',
  cargo: '',
  folio: '',
  email: '',
  warning: '',
  empresas: '',
  entidades: '',
  organismos: '',
  representante: '',
  condiciones: false,
};

/*__________________Inputs validations.__________________*/
export interface IAttributes {
  required?: ValidationRule<boolean> | undefined | string;
  maxLength?: ValidationRule<number> | undefined;
  minLength?: ValidationRule<number> | undefined;
}
export const folio_terms: IAttributes = {
  required: true,
  maxLength: 4,
  minLength: 4,
};
export const tomo_terms: IAttributes = {
  required: true,
  maxLength: 4,
  minLength: 4,
};
export const ci_terms: IAttributes = {
  required: true,
  maxLength: 11,
  minLength: 11,
};
export const tel_terms: IAttributes = {
  required: true,
  maxLength: 12,
  minLength: 8,
};
export const email_terms: IAttributes = {
  required: true,
};
type errors = {
  id?: FieldErrors | undefined;
  tel?: FieldErrors | undefined;
  tomo?: FieldErrors | undefined;
  folio?: FieldErrors | undefined;
  email?: FieldErrors | undefined;
};

// HTML ATTRIBUTES

export const number_type: chakraProps = {
  size: 'sm',
  type: 'number',
  variant: 'flushed',
};
export const email_type: chakraProps = {
  size: 'sm',
  type: 'email',
  variant: 'flushed',
};
export const telephone_type: chakraProps = {
  size: 'sm',
  type: 'tel',
  variant: 'flushed',
};
export const text_type: chakraProps = {
  size: 'sm',
  type: 'text',
  variant: 'flushed',
};
export const password_type: chakraProps = {
  size: 'sm',
  type: 'password',
  variant: 'flushed',
};

interface ITooltip {
  ci: string;
  tel: string;
  tomo: string;
  folio: string;
  email: string;
}

export const tooltips: ITooltip = {
  ci: 'Solo 11 dígitos y ser mayor de 18 años',
  tomo: 'El tomo solo admite 4 dígitos',
  folio: 'El folio solo admite 4 dígitos',
  email: 'Formato de email incorrecto!',
  tel: 'Número de teléfono requrido!',
};

interface IToastProps {
  position: string;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: undefined;
  toastId: number;
}

export const toastProps: IToastProps = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  toastId: 1,
};

export function infoMessage(err: errors, toast: any) {
  err.id &&
    toast.warning('Nro de identidad es 11 dígitos y ser mayor de 18 años', {
      ...toastProps,
    });
  err.tomo && toast.warning('Tomo admite 4 números!', { ...toastProps });
  err.folio && toast.warning('Folio admite 4 números!', { ...toastProps });
  err.email && toast.warning('Email formato incorrecto!', { ...toastProps });
  err.tel && toast.warning('Nro de teléfono requerido!', { ...toastProps });
}

type DrawerStyleProps = {
  width: string;
  height: string;
  backgroundImage: string;
  backgroundPosition: string;
  backgroundRepeat: string;
  backgroundSize: string;
};

type ToggleButtonProps = {
  color: string;
};

export const lateralMenu: DrawerStyleProps = {
  width: '100%',
  height: '150px',
  backgroundImage: `url('./images/aside.jpg')`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '70px',
};

export const toggleButton: ToggleButtonProps = {
  color: '#f8f8f8',
};

export const theme = {
  green: 'linear-gradient(to right, #222222, #9900FF );',
  rainbow: 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);',
};

//FF1AA3 #FF3333  #9900FF
