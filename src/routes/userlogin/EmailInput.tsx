import * as React from 'react';
import { Input, Tooltip } from '@chakra-ui/react';
import { UseFormRegister } from 'react-hook-form';
import ErrorWarning from '../admin/common/ErrorWarning';

interface IFormValue {
  email: string;
  password:string;
}

type InputProps = {
  info?: string;
  errors: object;
  defaultValue?: string;
  register: UseFormRegister<IFormValue>;
};

const EmailInput = ({ register, errors, defaultValue, info }: InputProps) => {
  return (
    <>
      <Tooltip label={info} hasArrow arrowSize={15}>
        <Input
          size='sm'
          type='email'
          cursor='pointer'
          variant='flushed'
          defaultValue={defaultValue}
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
      </Tooltip>
      <ErrorWarning label='email' errors={errors} info={info} />
    </>
  );
};

export default EmailInput;
