import * as React from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';
//import { toast } from 'react-toastify';
import { email_type } from './constants';
//import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PasswordInput from './PasswordInput';
import StatusHandler from './StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import SubmitButton from './SubmitButton';
import ErrorWarning from '../admin/common/ErrorWarning';

import { HStack, Center, Input, Heading, Container } from '@chakra-ui/react';

const BASE_URL = 'http://localhost:5000/';
const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});
axiosApi.defaults.headers.common['Content-Type'] = 'application/json';

interface IUserCredentials {
  email?: string;
  password: string;
}

//personalizar los toast.
const Form = () => {
  //const navigate = useNavigate();
  const [status, setStatus] = React.useState('');
  //const [token, setToken] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserCredentials>();

  async function postRequest(formdata: IUserCredentials): Promise<IUserCredentials | any> {
    try {
      const res = await axiosApi.post('login', formdata);
      setStatus(res.data?.message);
      //console.log(res.data?.message);
      return res.data;
    } catch (error: any) {
      //console.log(error);
      return error?.message;
    }
  }

  const { data, mutateAsync, isLoading, isError, isSuccess } = useMutation(
    (value: IUserCredentials) => postRequest(value),
  );
  const onSubmit: SubmitHandler<IUserCredentials> = (formData: IUserCredentials) => {
    mutateAsync(formData);
  };

  React.useEffect(() => {
    setStatus(data);
  }, [data]);

  React.useEffect(() => {
    data?.jwt && localStorage.setItem('jwt', data?.jwt);
  }, [data?.jwt]);

  //data?.jwt && localStorage.setItem('jwt', data?.jwt);

  return (
    <StyledForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Center w='100%' p='1.5em'>
          <Heading as='h3' size='lg' color='#B22222'>
            Inicio de sesión.
          </Heading>
        </Center>

        <HStack p='1em'>
          <Container>
            <label htmlFor='email'>
              <strong className='byid-input-label'>Escriba su email.</strong>
            </label>
            <Input {...register('email', { required: true })} {...email_type} />
          </Container>
        </HStack>
        <ErrorWarning label='email' errors={errors} m='0 2em' />
        <HStack p='1em'>
          <Container>
            <label htmlFor='password'>
              <strong className='input-label'>Escriba su contraseña.</strong>
            </label>
            <PasswordInput label='password' register={register} required />
          </Container>
        </HStack>
        <ErrorWarning label='password' errors={errors} m='0 2em' />
        <SubmitButton buttonstate={isLoading} />
      </form>
      {status && <StatusHandler message={status} />}
    </StyledForm>
  );
};
export default Form;
const StyledForm = styled.div`
  max-width: 500px;
  border: 1px solid #cccccc;
  border-radius: 15px;
`;
