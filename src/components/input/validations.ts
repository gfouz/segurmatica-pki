//____________functions to handle dates and time_____________//
function turnToInt(value: number | string, start: number, end: number) {
  return parseInt(value.toString().substring(start, end));
}

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
currentYear = turnToInt(currentYear, 2, 4);
/*-------------------------------------------------------------------*/

/*-----------css styles and Chakra properties types.--------*/
export type chakraProps = {
  size: string;
  type: string;
  variant: string;
};
export const numberType: chakraProps = {
  size: "sm",
  type: "number",
  variant: "flushed",
};
export const emailType: chakraProps = {
  size: "sm",
  type: "email",
  variant: "flushed",
};
export const textType: chakraProps = {
  size: "sm",
  type: "text",
  variant: "flushed",
};
export const telType: chakraProps = {
  size: "sm",
  type: "tel",
  variant: "flushed",
};

/*----------Names for react-hook-form registers.---------------------*/

export interface IFormInput {
  /*_______these are also! nominals for register props________*/
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

//__________________Aditional validations.__________________//
export interface IRequirements {
  required: boolean;
  maxLength: number;
  minLength: number;
}
export const idValidation: IRequirements = {
  required: true,
  maxLength: 11,
  minLength: 11,
};
export const onlyRequired: IRequirements = {
  required: true,
  maxLength: 4,
  minLength: 4,
};
export const telValidation: IRequirements = {
  required: true,
  maxLength: 12,
  minLength: 8,
};
/*-----------------------Literal types for registering inputs---------------------------------*/

export type ILabel = "id" | "tel" | "tomo" | "folio" | "email";
