import * as React from "react";
import { Input, Tooltip } from "@chakra-ui/react";
import { InputProps } from "./validations";



const ChakraInput = ({
  list,
  datalist,
  label,
  htmlAttributes,
  register,
  validations,
  placeholder,
  _placeholder,
  requirements,
  message,
  pattern
}: InputProps) => {
  return (
    <>
      <datalist id={list}>
          {datalist && datalist.map((item: string)=>(
            <option key={React.useId()} value={item}></option>
            ))}
      </datalist>
      <Tooltip label={message} hasArrow arrowSize={15}>
      <Input
         list={list}
        {...htmlAttributes}
        _placeholder={_placeholder}
        placeholder={placeholder}
        {...register(label, {
          ...requirements,
          validate: { ...validations },
          pattern: pattern
        })}
      />
     </Tooltip> 
    </>
  );
};

export default ChakraInput;

/*
          <option value="Pinar del Río"></option>
          <option value="Habana"></option>
          <option value="Matanzas"></option>
          <option value="Cienfuegos"></option>
          <option value="Ciego de Ávila"></option>
          <option value="Camaguey"></option>
          <option value="Las Tunas"></option>
          <option value="Holguín"></option>
          <option value="Granma"></option>
          <option value="Santigo"></option>

*/          