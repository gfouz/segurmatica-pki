import * as React from "react";

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

// do not forget to organize this in a better way to avoid repetitions.
type InputProps = {
  size: string;
  type: string;
  variant: string;
};
type EmailInputProps = {
  size: string;
  type: string;
  variant: string;
};
type TextInputProps = {
  size: string;
  type: string;
  variant: string;
};
type InputLableProps = {
  size: string;
  type: string;
  variant: string;
};

export const OnlyNumberInputProps: InputProps = {
  size: "sm",
  type: "number",
  variant: "flushed",
};

export const EmailInputProps: EmailInputProps = {
  size: "sm",
  type: "email",
  variant: "flushed",
};
export const TextInputProps: TextInputProps = {
  size: "sm",
  type: "text",
  variant: "flushed",
};
export const InputLabelProps: InputLableProps = {
  size: "sm",
  type: "text",
  variant: "flushed",
};

type TValidations = {
  isGrownUp: (color: string) => boolean;
  monthMin: (color: string) => boolean;
  monthMax: (color: string) => boolean;
  dayMin: (color: string) => boolean;
  dayMax: (color: string) => boolean;
};

interface IGeneration {
  required: boolean;
  maxLength: number;
  minLength: number;
  validate: TValidations;
}

function convertInt(value: number | string, start: number, end: number) {
  return parseInt(value.toString().substring(start, end));
}

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
currentYear = convertInt(currentYear, 2, 4);
currentMonth = convertInt(currentMonth, 2, 4);

export const IdGenerationRules: IGeneration = {
  required: true,
  maxLength: 11,
  minLength: 11,
  validate: {
    isGrownUp: (color: string) =>
      (currentYear > convertInt(color, 0, 2) &&
        currentYear - convertInt(color, 0, 2) > 18) ||
      (currentYear < convertInt(color, 0, 2) && convertInt(color, 0, 2) < 99),
    monthMin: (color: string) => parseInt(color.substring(2, 4)) >= 1,
    monthMax: (color: string) => parseInt(color.substring(2, 4)) <= 12,
    dayMin: (color: string) => parseInt(color.substring(4, 6)) >= 1,
    dayMax: (color: string) => parseInt(color.substring(4, 6)) <= 31,
  },
};

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

export const green = (prev: IState) => {
  return { ...prev, color: "#00FF00" };
};

export const red = (prev: IState) => {
  return { ...prev, color: "#FF0000" };
};

export const grey = (prev: IState) => {
  return { ...prev, color: "#CCCCCC" };
};

export const black = (prev: IState) => {
  return { ...prev, color: "#666666" };
};
