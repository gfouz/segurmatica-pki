import * as React from "react";
import { Input } from "@chakra-ui/react";
import { InputProps } from "./validations";

const ChakraInput = ({
  idEvt,
  label,
  htmlAttributes,
  register,
  validations,
  placeholder,
  _placeholder,
  requirements,
}: InputProps) => {
  return (
    <>
      <Input
        {...htmlAttributes}
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
