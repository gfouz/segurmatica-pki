import { ResponsiveValue } from "@chakra-ui/react";
import { ValidationRule } from "react-hook-form";
import * as React from "react";

//____________functions to handle dates and time_____________//
function turnToInt(value: number | string, start: number, end: number) {
  return parseInt(value.toString().substring(start, end));
}
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
currentYear = turnToInt(currentYear, 2, 4);

/*------------types of data that is sent by the form--------------*/
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

export const ORGANISMOS: string[] = [
  "PCC",
  "MININT",
  "FAR",
  "MTSS",
  "MINCIN",
  "MEP",
];

export const EMPRESAS: string[] = [
  "ETECSA",
  "UNE",
  "DPT",
  "FCBC",
  "UMCC",
  "ITH",
];

export const ENTIDADES: string[] = ["BANDEC", "BPA"];

export const REPRESENTANTES: string[] = [
  "Gilberto Alejandro Acosta",
  "Giovani Fouz Jiménez",
];

/*-----------css styles and Chakra attributes types.--------*/
export type chakraAttributes = {
  size: ResponsiveValue<(string & {}) | "sm" | "md" | "lg" | "xs"> | undefined;
  type: React.HTMLInputTypeAttribute | undefined;
  variant:
    | ResponsiveValue<
        (string & {}) | "outline" | "flushed" | "unstyled" | "filled"
      >
    | undefined;
};

interface IInputTypes {
  number: () => chakraAttributes;
  email: () => chakraAttributes;
  telephone: () => chakraAttributes;
  text: () => chakraAttributes;
  password: () => chakraAttributes;
}
export const inputType: IInputTypes = {
  number: () => {
    return {
      size: "sm",
      type: "number",
      variant: "flushed",
    };
  },
  email: () => {
    return {
      size: "sm",
      type: "email",
      variant: "flushed",
    };
  },
  telephone: () => {
    return {
      size: "sm",
      type: "tel",
      variant: "flushed",
    };
  },
  password: () => {
    return {
      size: "sm",
      type: "password",
      variant: "flushed",
    };
  },
  text: () => {
    return {
      size: "sm",
      type: "text",
      variant: "flushed",
    };
  },
};

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
    (currentYear - turnToInt(id, 0, 2) == 18 &&
      currentMonth > turnToInt(id, 2, 4)) ||
    (currentYear > turnToInt(id, 0, 2) &&
      currentYear - turnToInt(id, 0, 2) > 18) ||
    (currentYear < turnToInt(id, 0, 2) && turnToInt(id, 0, 2) < 99),
  monthover: (id) => parseInt(id.substring(2, 4)) >= 1,
  monthunder: (id) => parseInt(id.substring(2, 4)) <= 12,
  dayover: (id) => parseInt(id.substring(4, 6)) >= 1,
  dayunder: (id) => parseInt(id.substring(4, 6)) <= 31,
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
  id: "",
  tel: "",
  tomo: "",
  color: "#000000",
  cargo: "",
  folio: "",
  email: "",
  warning: "",
  empresas: "",
  entidades: "",
  organismos: "",
  representante: "",
  condiciones: false,
};

//__________________Aditional validations.__________________//
export interface IAttributes {
  required: ValidationRule<boolean> | string | undefined;
  maxLength: ValidationRule<number> | undefined;
  minLength: ValidationRule<number> | undefined;
}
interface IInputs {
  id: () => IAttributes;
  tel: () => IAttributes;
  tomo: () => IAttributes;
  folio: () => IAttributes;
}
export const attributes: IInputs = {
  id: () => {
    return { required: true, maxLength: 12, minLength: 8 };
  },
  tomo: () => {
    return { required: true, maxLength: 12, minLength: 8 };
  },
  folio: () => {
    return { required: true, maxLength: 12, minLength: 8 };
  },
  tel: () => {
    return { required: true, maxLength: 12, minLength: 8 };
  },
};
/*-----collection of attributes. */

/*-----colors states for labels*/
export const color = {
  green: (prev: IState) => {
    return { ...prev, color: "#00FF00" };
  },
  red: (prev: IState) => {
    return { ...prev, color: "#FF0000" };
  },
  grey: (prev: IState) => {
    return { ...prev, color: "#CCCCCC" };
  },
  black: (prev: IState) => {
    return { ...prev, color: "#666666" };
  },
};
