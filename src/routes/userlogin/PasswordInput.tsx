import * as React from 'react';
import { Input, Tooltip } from '@chakra-ui/react';
import Eye from '../../icons/Eye';
import EyeSlash from '../../icons/EyeSlashIcon';
import { Path, UseFormRegister } from 'react-hook-form';
import ErrorWarning from '../admin/common/ErrorWarning';


interface IFormValues {
  email: string;
  password: string;
}

interface IInfo {
  password: string;
  password2: string;
}

type InputProps = {
  label: Path<IFormValues>;
  info: IInfo;
  errors: object;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};
const PasswordInput = ({ label, errors, info, register }: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const toggle = () => setShowPassword(!showPassword);

  return (
    <>
      <Tooltip label={info.password2} hasArrow arrowSize={15}>
      <Input
        {...register(label, { required:true })}
        cursor='pointer'
        size='sm'
        type={showPassword ? 'text' : 'password'}
        variant='flushed'
      />
      </Tooltip>
      <ErrorWarning label={label} errors={errors} info={info.password} />
      <div style={{ margin: '1em 0' }} onClick={toggle}>
        {showPassword ? <Eye /> : <EyeSlash />}
      </div>
    </>
  );
};

export default PasswordInput;
