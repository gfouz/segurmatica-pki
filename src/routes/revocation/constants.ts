import * as React from "react";
import { Validate, ValidateResult } from "react-hook-form";

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

/*-----------css styles and Chakra properties types.--------*/
export type chakraProps = {
  size: string;
  type: string;
  variant: string;
};
export const number_input: chakraProps = {
  size: "sm",
  type: "number",
  variant: "flushed",
};
export const email_input: chakraProps = {
  size: "sm",
  type: "email",
  variant: "flushed",
};
export const tel_input: chakraProps = {
  size: "sm",
  type: "tel",
  variant: "flushed",
};
export const password_input: chakraProps = {
  size: "sm",
  type: "password",
  variant: "flushed",
};
export const text_input: chakraProps = {
  size: "sm",
  type: "text",
  variant: "flushed",
};
type Validations = {
  isGrownUp: () => {};
  monthMin: () => boolean;
  monthMax: () => boolean;
  dayMin: () => boolean;
  dayMax: () => boolean;
};
interface IdRegisterRulesTypes {
  required: boolean;
  maxLength: number;
  minLength: number;
  validate: any;
}

function fix(value: number | string, start: number, end: number) {
  return parseInt(value.toString().substring(start, end));
}

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
currentYear = fix(currentYear, 2, 4);
currentMonth = fix(currentMonth, 2, 4);

export const IdRegisterRules: IdRegisterRulesTypes = {
  required: true,
  maxLength: 11,
  minLength: 11,
  validate: {
    isGrownUp: (tip: string) =>
      (currentYear > fix(tip, 0, 2) && currentYear - fix(tip, 0, 2) > 18) ||
      (currentYear < fix(tip, 0, 2) && fix(tip, 0, 2) < 99),
    monthMin: (tip: string) => parseInt(tip.substring(2, 4)) >= 1,
    monthMax: (tip: string) => parseInt(tip.substring(2, 4)) <= 12,
    dayMin: (tip: string) => parseInt(tip.substring(4, 6)) >= 1,
    dayMax: (tip: string) => parseInt(tip.substring(4, 6)) <= 31,
  },
};


