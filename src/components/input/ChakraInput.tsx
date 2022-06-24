import * as React from "react";
import { Input } from "@chakra-ui/react";
import {
  IFormInput,
  IDates,
  numberInput,
  idRequirements,
  IRequirements,
} from "./validations";
import { UseFormRegister, FieldErrors, Path, Validate } from "react-hook-form";
import { CSSObject } from "@emotion/react";

interface InputProps {
  idEvt: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: Path<IFormInput> | any;
  register: UseFormRegister<IFormInput>;
  errors: FieldErrors;
  placeholder: string | undefined;
  _placeholder: CSSObject | undefined;
  requirements: IRequirements;
  validations?: IDates;
}

const ChakraInput = ({
  idEvt,
  label,
  register,
  validations,
  placeholder,
  _placeholder,
  requirements,
}: InputProps) => {
  return (
    <>
      <Input
        {...numberInput}
        _placeholder={_placeholder}
        placeholder={placeholder}
        {...register(label, {
          ...requirements,
          validate: { ...validations },
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => idEvt(e),
        })}
      />
    </>
  );
};
export default ChakraInput;
