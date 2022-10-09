import React from 'react';
import ErrorWarning from '../common/ErrorWarning';
import { Input, Tooltip } from '@chakra-ui/react';
import { Path, UseFormRegister } from 'react-hook-form';
import { IFormInput } from './constants';

type InputProps = {
  info?: string;
  errors: object;
  required?: boolean;
  label: Path<IFormInput>;
  defaultValue?: string;
  register: UseFormRegister<IFormInput>;
};
const TelInput = ({ label, register, required, errors, defaultValue, info }: InputProps) => {
  return (
    <>
      <Tooltip label={info} hasArrow arrowSize={15}>
        <Input
          size='sm'
          type='tel'
          cursor='pointer'
          variant='flushed'
          defaultValue={defaultValue}
          {...register(label, {
            required,
            pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im,
          })}
        />
      </Tooltip>
      <ErrorWarning label={label} errors={errors} info={info} />
    </>
  );
};

export default TelInput;
