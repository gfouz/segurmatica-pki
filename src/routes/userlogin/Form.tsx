import * as React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { info } from '../admin/common/constants';
import styled from 'styled-components';
import StatusHandler from './StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import SubmitButton from './SubmitButton';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import StyledLabel from '../admin/common/StyledLabel';
import ErrorWarning from '../admin/common/ErrorWarning';
import { Flex } from '@chakra-ui/react';

import { useSnapshot } from 'valtio';
import { users } from '../admin/common/store';

const BASE_URL = 'http://localhost:5000/';
const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});
axiosApi.defaults.headers.common['Content-Type'] = 'application/json';

interface IFormInput {
  email: string;
  password: string;
}


const Form = () => {
  const snap = useSnapshot(users);
  const navigate = useNavigate();
  const [status, setStatus] = React.useState('');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  async function postRequest(formdata: IFormInput): Promise<IFormInput | any> {
    try {
      const res = await axiosApi.post('login', formdata);
      const { data: result } = res;
      return result;
  } catch (error: any) {
      return error?.message;
  }
  }

  const { data, mutateAsync, isLoading, isError, isSuccess } = useMutation((value: IFormInput) =>
    postRequest(value),
  );
  const onSubmit: SubmitHandler<IFormInput> = (formData: IFormInput) => {
    mutateAsync(formData);
  };

  const message = data?.message || data;

  React.useEffect(() => {
    setStatus(message);
    message === 'accepted' && navigate('/admin');
  }, [message]);

  React.useEffect(() => {
    data?.jwt && localStorage.setItem('jwt', data?.jwt);
    snap.setUser(data?.user);
  }, [data?.jwt]);
  
  console.log(data)

  return (
    <StyledBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction='column'>
          <StyledLabel m='2em 0' color='#009966' upper center>
            Inicio de sesión.
          </StyledLabel>
          <StyledLabel m='1em 0 0 0'>Correo electrónico</StyledLabel>
          <EmailInput register={register} errors={errors} info={info.email} />
          <ErrorWarning label='email' errors={errors} m='0 2em' />
          <StyledLabel m='1em 0 0 0'>Contraseña</StyledLabel>
          <PasswordInput
            info={info}
            errors={errors}
            label='password'
            register={register}
            required
          />
          <ErrorWarning label='password' errors={errors} m='0 2em' />
          <SubmitButton buttonstate={isLoading} />
          {status && <StatusHandler message={status} />}
        </Flex>
      </form>
    </StyledBox>
  );
};
export default Form;
const StyledBox = styled.div`
  min-width: 320px;
  padding: 2em;
  box-shadow: 1px 1px 10px #222222;
  border-radius: 15px;
`;

/*
email: "laura@nauta.cu"

password: 123456
password: "$2b$10$ylLLfYw8tUQG0Vl479tOmuyk8PfPVZCMSXfpw/B4p/5CilUbLEJ9K"
*/
