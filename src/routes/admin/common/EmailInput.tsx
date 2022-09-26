import * as React from 'react';
import { Input, Tooltip } from '@chakra-ui/react';
import ErrorWarning from './ErrorWarning';
import { UseFormRegister } from 'react-hook-form';

interface IFormValue {
  email: string | undefined;
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
      <ErrorWarning label='email' errors={errors} m='0 2em' info={info} />
    </>
  );
};

export default EmailInput;
