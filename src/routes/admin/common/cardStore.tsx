import React, { useState, useEffect } from 'react';
import { ResponsiveValue } from '@chakra-ui/react';

import create from 'zustand';

const useStore = create((set) => ({
  option: 'mostrar',
  setOption: (option: string) => set(() => ({ option })),
}));

export const useCardStore = useStore;

//Data list for input component autocomplete.
export const provinces: string[] = [
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
export const IDS: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '123456789'];
export const emailtips: string[] = [
  'a@gmail.com',
  'b@gmail.com',
  'c@gmail.com',
  'd@gmail.com',
  'e@gmail.com',
];

interface ITooltip {
  ci: string;
  dn: string;
  motive: string;
  provincia: string;
}
export const tooltip: ITooltip = {
  provincia: 'Escriba algún nombre de provincia.',
  ci: 'Solo 11 dígitos y ser mayor de 18!',
  dn: 'Número de serie es requerido!',
  motive: 'Motivo de revocación es requerido!',
};

/*-----------css styles and Chakra attributes types.--------*/
export type chakraProps = {
  size: ResponsiveValue<(string & unknown) | 'sm' | 'md' | 'lg' | 'xs'> | undefined;
  type: React.HTMLInputTypeAttribute | undefined;
  variant:
    | ResponsiveValue<(string & unknown) | 'outline' | 'flushed' | 'unstyled' | 'filled'>
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

export const useLocalStorage = (key: string, defaultValue = null) => {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved !== null) {
        return saved;
      }
      return defaultValue;
    } catch {
      return defaultValue;
    }
  });
  useEffect(() => {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue);
  }, [value]);

  return [value, setValue];
};
