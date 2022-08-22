import * as React from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { text_type, email_type, password_type, useLocalStorage } from './constants';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  USER,
  password_input,
  password_terms,
  text_input,
  user_terms,
  toastProps,
  infoMessage,
} from './constants';
import ChakraInput from '../../components/input/ChakraInput';
import Eye from '../../icons/Eye';
import EyeSlash from '../../icons/EyeSlashIcon';
import Option from '../../components/Option';
import {
  Box,
  Flex,
  HStack,
  Button,
  Center,
  Input,
  Spinner,
  Badge,
  Heading,
  Container,
} from '@chakra-ui/react';

const BASE_URL = 'http://localhost:5000/';
const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});
axiosApi.defaults.headers.common['Content-Type'] = 'application/json';

const submitbtn = {
  m: '2em',
  color: '#222222',
  bg: '#ab8ffe',
  border: '1px solid #ab8ffe',
  size: 'md',
  type: 'submit',
};

interface IUserCredentials {
  email?: string;
  password?: string;
}

//personalizar los toast.

const Form = () => {
  const navigate = useNavigate();
  const [status, setStatus] = React.useState('');
  const [token, setToken] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserCredentials>();

  async function postRequest(data: IUserCredentials) {
    try {
      const res = await axiosApi.post('login', data);
      //setStatus(res.status.toString());
      return res.data;
    } catch (err) {
      setStatus(err.response?.data.error);
    }
  }

  const { data, mutation, mutateAsync, isLoading, isError, isSuccess } = useMutation((value) =>
    postRequest(value),
  );
  const onSubmit: SubmitHandler<IFormInput> = (formData: IUserCredentials) => {
    mutateAsync(formData);
  };
  data && localStorage.setItem('jwt', data.signature);

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
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>Escriba su email.</strong>
            </label>
            <Input {...register('email', { required: true })} {...email_type} />
          </Container>
        </HStack>
        {errors.email && <span style={{ color: 'red', margin: '2em' }}>Field is required</span>}

        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>Escriba su contraseña.</strong>
            </label>
            <Input
              {...register('password', { required: true })}
              size='sm'
              type={showPassword ? 'text' : 'password'}
              variant='flushed'
            />
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye /> : <EyeSlash />}
            </button>
          </Container>
        </HStack>
        {errors.password && <span style={{ color: 'red', margin: '2em' }}>Field is required</span>}
        <Box p='2em 0.7em' w='100%'>
          <Button {...submitbtn}>
            {isLoading ? (
              <div>
                <Spinner size='sm' />
                <Badge>trying...</Badge>
              </div>
            ) : (
              <span>Enviar</span>
            )}
          </Button>
          <span>
            {isSuccess ? (
              <Badge p='5px' colorScheme='green'>
                Enviado!
              </Badge>
            ) : (
              <span>no enviado</span>
            )}
            {isError && (
              <Badge p='5px' colorScheme='red'>
                Error de red!
              </Badge>
            )}
          </span>
        </Box>
      </form>
      {status === 'not-found' && (
        <Heading color='#ff0000' size='sm' m='2em'>
          Datos enviados pero no existen.
        </Heading>
      )}
    </StyledForm>
  );
};
export default Form;
const StyledForm = styled.div`
  max-width: 500px;
  border: 1px solid #cccccc;
  border-radius: 15px;
`;
