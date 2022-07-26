import { ResponsiveValue } from "@chakra-ui/react";
import { FieldErrors, ValidationRule } from "react-hook-form";
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
export type chakraProps = {
  size: ResponsiveValue<(string & {}) | "sm" | "md" | "lg" | "xs"> | undefined;
  type: React.HTMLInputTypeAttribute | undefined;
  variant:
    | ResponsiveValue<
        (string & {}) | "outline" | "flushed" | "unstyled" | "filled"
      >
    | undefined;
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
  size: "sm",
  type: "number",
  variant: "flushed",
};
export const email_type: chakraProps = {
  size: "sm",
  type: "email",
  variant: "flushed",
};
export const telephone_type: chakraProps = {
  size: "sm",
  type: "tel",
  variant: "flushed",
};
export const text_type: chakraProps = {
  size: "sm",
  type: "text",
  variant: "flushed",
};
export const password_type: chakraProps = {
  size: "sm",
  type: "password",
  variant: "flushed",
};

interface ITooltip {
  ci: string;
  tel: string;
  tomo: string;
  folio: string;
  email: string;
}

export const tooltips: ITooltip = {
  ci: "Solo 11 dígitos y ser mayor de 18 años",
  tomo: "El tomo solo admite 4 dígitos",
  folio: "El folio solo admite 4 dígitos",
  email: "Formato de email incorrecto!",
  tel: "Número de teléfono requrido!",
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
  position: "top-center",
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
    toast.warning(
      "Nro de carnet de identidad es 11 dígitos y ser mayor de 18 años",
      {
        ...toastProps,
      }
    );
  err.tomo && toast.warning("Tomo admite 4 números!", { ...toastProps });
  err.folio && toast.warning("Folio admite 4 números!", { ...toastProps });
  err.email && toast.warning("Email formato incorrecto!", { ...toastProps });
  err.tel && toast.warning("Nro de teléfono requerido!", { ...toastProps });
}
