import React from 'react';
import ErrorWarning from './ErrorWarning';
import { IFormInput } from './constants';
import { Input, Tooltip } from '@chakra-ui/react';
import { Path, UseFormRegister } from 'react-hook-form';

type InputProps = {
  info?: string;
  errors: object;
  required?: boolean;
  defaultValue?: string | number | undefined;
  label: Path<IFormInput>;
  register: UseFormRegister<IFormInput>;
};
const AlphaNumericInput = ({
  label,
  register,
  required,
  errors,
  defaultValue,
  info,
}: InputProps) => {
  return (
    <>
      <Tooltip label={info} hasArrow arrowSize={15}>
        <Input
          size='sm'
          cursor='pointer'
          variant='flushed'
          defaultValue={defaultValue}
          {...register(label, { pattern: /^[a-zA-Z0-9\s:,.'-]{3,}$/, required })}
        />
      </Tooltip>
      <ErrorWarning label={label} errors={errors} info={info} />
    </>
  );
};

export default AlphaNumericInput;
