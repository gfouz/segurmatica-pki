import { CSSObject } from "@emotion/react";
import { UseFormRegister, ValidationRule } from "react-hook-form";
import { ResponsiveValue } from "@chakra-ui/react";

/*-----------------Literal types for registering inputs-------------------*/
export type ILabel =
  | "id"
  | "dn"
  | "tel"
  | "tomo"
  | "terms"
  | "folio"
  | "email"
  | "user"
  | "motive"
  | "usertype"
  | "password";

export interface IAttributes {
  required?: ValidationRule<boolean> | undefined | string;
  maxLength?: ValidationRule<number> | undefined;
  minLength?: ValidationRule<number> | undefined;
}
export type chakraAttributes = {
  size: ResponsiveValue<(string & {}) | "sm" | "md" | "lg" | "xs"> | undefined;
  type: React.HTMLInputTypeAttribute | undefined;
  variant:
    | ResponsiveValue<
        (string & {}) | "outline" | "flushed" | "unstyled" | "filled"
      >
    | undefined;
};

export interface InputProps {
  //idEvt: (e: React.ChangeEvent<HTMLInputElement>) => void;
  list?: string;
  datalist?: string[];
  label: ILabel;
  pattern?: RegExp;
  message?: string;
  htmlAttributes: chakraAttributes;
  register?: UseFormRegister<any>;
  placeholder?: string | undefined;
  _placeholder?: CSSObject | undefined;
  requirements?: IAttributes;
  validations?: IDates;
}

//____________functions to handle dates and time_____________//
function turnToInt(value: number | string, start: number, end: number) {
  return parseInt(value.toString().substring(start, end));
}

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
currentYear = turnToInt(currentYear, 2, 4);
/*-------------------------------------------------------------------*/

/*-----------css styles and Chakra properties types.--------*/
export const numberType: chakraAttributes = {
  size: "sm",
  type: "number",
  variant: "flushed",
};
export const emailType: chakraAttributes = {
  size: "sm",
  type: "email",
  variant: "flushed",
};
export const textType: chakraAttributes = {
  size: "sm",
  type: "text",
  variant: "flushed",
};
export const telType: chakraAttributes = {
  size: "sm",
  type: "tel",
  variant: "flushed",
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
