import * as React from 'react';
import { Input } from '@chakra-ui/react';
import Eye from '../../icons/Eye';
import EyeSlash from '../../icons/EyeSlashIcon';
import { Path, UseFormRegister } from "react-hook-form";

interface IFormValues {
  'password': string;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};
const PasswordInput = ({ label, register, required }: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const toggle = () => setShowPassword(!showPassword);

  return (
    <>
      <Input {...register(label, { required })}
        size='sm'
        type={showPassword ? 'text' : 'password'}
        variant='flushed'
      />
      <div style={{margin:'1em 0'}} onClick={toggle}>
        {showPassword ? <Eye /> : <EyeSlash />}
      </div>
    </>
  );
};

export default PasswordInput;