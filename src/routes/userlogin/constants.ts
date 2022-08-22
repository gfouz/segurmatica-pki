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
export const email_type: chakraProps = {
  size: 'sm',
  type: 'email',
  variant: 'flushed',
};
export const password_type: chakraProps = {
  size: 'sm',
  type: 'password',
  variant: 'flushed',
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

export const useLocalStorage = (key, defaultValue = null) => {
  const [value, setValue] = React.useState(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved !== null) {
        return JSON.parse(saved);
      }
      return defaultValue;
    } catch {
      return defaultValue;
    }
  });

  React.useEffect(() => {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue);
  }, [value]);

  return [value, setValue];
};
