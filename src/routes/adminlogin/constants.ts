import * as React from 'react';
import { ValidationRule } from 'react-hook-form';
import { ResponsiveValue } from '@chakra-ui/react';
import { useQueryClient } from 'react-query';

/*------------types of data that is sent by the form--------------*/
export interface IFormInput {
  //these are also! nominals for register props.
  user: string;
  terms: string;
  usertype: string;
  password: string;
}
export const USER: string[] = ['ADMINISTRADOR', 'CLIENTE'];

/*__________________Password validations.__________________*/
export interface IAttributes {
  required: ValidationRule<boolean> | string | undefined;
  maxLength: ValidationRule<number> | undefined;
  minLength: ValidationRule<number> | undefined;
}
export const password_terms: IAttributes = {
  required: true,
  maxLength: 8,
  minLength: 4,
};
export const user_terms: IAttributes = {
  required: true,
  maxLength: 8,
  minLength: 6,
};

/*-----------native html and Chakra properties types.--------*/
export type chakraProps = {
  size: ResponsiveValue<(string & {}) | 'sm' | 'md' | 'lg' | 'xs'> | undefined;
  type: React.HTMLInputTypeAttribute | undefined;
  variant:
    | ResponsiveValue<(string & {}) | 'outline' | 'flushed' | 'unstyled' | 'filled'>
    | undefined;
};

export const number_input: chakraProps = {
  size: 'sm',
  type: 'number',
  variant: 'flushed',
};
export const email_input: chakraProps = {
  size: 'sm',
  type: 'email',
  variant: 'flushed',
};
export const tel_input: chakraProps = {
  size: 'sm',
  type: 'tel',
  variant: 'flushed',
};
export const password_input: chakraProps = {
  size: 'sm',
  type: 'password',
  variant: 'outline',
};
export const text_input: chakraProps = {
  size: 'sm',
  type: 'text',
  variant: 'outline',
};

interface IToastProps {
  position: string;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: undefined;
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

export function infoMessage(err, toast) {
  err.user && toast.warning('Usuario requerido!', { ...toastProps });
  err.password && toast.warning('Contraseña max 8 min 6!', { ...toastProps });
}
