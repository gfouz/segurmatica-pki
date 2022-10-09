import React from 'react';
import ErrorWarning from '../common/ErrorWarning';
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
const IntegerInput = ({ label, register, required, errors, defaultValue, info }: InputProps) => {
  return (
    <>
      <Tooltip label={info} hasArrow arrowSize={15}>
        <Input
          size='sm'
          cursor='pointer'
          variant='flushed'
          defaultValue={defaultValue}
          {...register(label, { pattern: /^\d+$/, required, maxLength: 4, minLength: 4 })}
        />
      </Tooltip>
      <ErrorWarning label={label} errors={errors} info={info} />
    </>
  );
};

export default IntegerInput;
