import React from 'react';
import ErrorWarning from './ErrorWarning';
import { IFormInput } from './constants';
import { Input, Tooltip } from '@chakra-ui/react';
import Eye from './icons/Eye';
import EyeSlash from './icons/EyeSlashIcon';
import { Path, UseFormRegister } from 'react-hook-form';

type InputProps = {
  info?: string;
  errors: object;
  required?: boolean;
  defaultValue?: string;
  label: Path<IFormInput>;
  register: UseFormRegister<IFormInput>;
};
const PasswordInput = ({ label, register, required, errors, defaultValue, info }: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const toggle = () => setShowPassword(!showPassword);

  return (
    <>
      <Tooltip label={info} hasArrow arrowSize={15}>
        <Input
          size='sm'
          type={showPassword ? 'text' : 'password'}
          cursor='pointer'
          variant='flushed'
          defaultValue={defaultValue}
          {...register(label, { required })}
        />
      </Tooltip>
      <div style={{ margin: '1em 0' }} onClick={toggle}>
        {showPassword ? <Eye /> : <EyeSlash />}
      </div>
      <ErrorWarning label={label} errors={errors} info={info} />
    </>
  );
};

export default PasswordInput;

// pattern: /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/,
