import React from 'react';
import ErrorWarning from './ErrorWarning';
import { IFormInput } from './constants';
import { Input, Tooltip } from '@chakra-ui/react';
import { Path, UseFormRegister } from 'react-hook-form';



type InputProps = {
  info?: string;
  errors: object;
  required?: boolean;
  defaultValue?: string;
  label: Path<IFormInput>;
  register: UseFormRegister<IFormInput>;
};
const NumericInput = ({ label, register, required, errors, defaultValue, info }: InputProps) => {
  return (
    <>
      <Tooltip label={info} hasArrow arrowSize={15}>
        <Input
          size='sm'
          cursor='pointer'
          variant='flushed'
          defaultValue={defaultValue}
          {...register(label, { pattern: /^\d*(\.\d+)?$/, required })}
        />
      </Tooltip>
      <ErrorWarning label={label} errors={errors} info={info} />
    </>
  );
};

export default NumericInput;
