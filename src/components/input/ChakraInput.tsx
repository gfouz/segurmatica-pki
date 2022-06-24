import * as React from "react";
import { Input } from "@chakra-ui/react";
import {
  IFormInput,
  IDates,
  ILabel,
  chakraProps,
  numberInput,
  IRequirements,
} from "./validations";
import { UseFormRegister, FieldErrors, Path } from "react-hook-form";
import { CSSObject } from "@emotion/react";

interface InputProps {
  idEvt: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: ILabel;
  chakraProps: chakraProps;
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
  chakraProps,
  register,
  validations,
  placeholder,
  _placeholder,
  requirements,
}: InputProps) => {
  return (
    <>
      <Input
        {...chakraProps}
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
