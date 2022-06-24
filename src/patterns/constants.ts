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
  isGrownUp: (id: string) => boolean;
  monthMin: (id: string) => boolean;
  monthMax: (id: string) => boolean;
  dayMin: (id: string) => boolean;
  dayMax: (id: string) => boolean;
};

interface IGeneration {
  required: boolean;
  maxLength: number;
  minLength: number;
  validate: TValidations;
}

function turnToInt(value: number | string, start: number, end: number) {
  return parseInt(value.toString().substring(start, end));
}

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
currentYear = turnToInt(currentYear, 2, 4);

export const IdGenerationRules: IGeneration = {
  required: true,
  maxLength: 11,
  minLength: 11,
  validate: {
    isGrownUp: (id: string) =>
      (currentYear - turnToInt(id, 0, 2) == 18 &&
        currentMonth > turnToInt(id, 2, 4)) ||
      (currentYear > turnToInt(id, 0, 2) &&
        currentYear - turnToInt(id, 0, 2) > 18) ||
      (currentYear < turnToInt(id, 0, 2) && turnToInt(id, 0, 2) < 99),
    monthMin: (id: string) => parseInt(id.substring(2, 4)) >= 1,
    monthMax: (id: string) => parseInt(id.substring(2, 4)) <= 12,
    dayMin: (id: string) => parseInt(id.substring(4, 6)) >= 1,
    dayMax: (id: string) => parseInt(id.substring(4, 6)) <= 31,
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
