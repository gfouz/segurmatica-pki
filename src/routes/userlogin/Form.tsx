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
import {
  Box,
  HStack,
  Button,
  Center,
  Input,
  Spinner,
  Badge,
  Heading,
  Container,
  ComponentWithAs,
  ButtonProps,
} from '@chakra-ui/react';

const BASE_URL = 'http://localhost:5000/';
const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});
axiosApi.defaults.headers.common['Content-Type'] = 'application/json';



const submitbtn: ComponentWithAs<'button', ButtonProps> = {
  m: '2em',
  color: '#222222',
  bg: '#ab8ffe',
  border: '1px solid #ab8ffe',
  size: 'md',
  type: 'submit',
};

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

  async function postRequest(data: IUserCredentials) {
    try {
      const res = await axiosApi.post('login', data);
      setStatus(res.data.message);
      console.log(res.data.message)
      return res.data;
    } catch (err) {
      console.log(err)
      setStatus(err.response?.data.error);
    }
  }

  const { data, mutateAsync, isLoading, isError, isSuccess } = useMutation((value) =>
    postRequest(value),
  );
  const onSubmit: SubmitHandler<IUserCredentials> = (formData: IUserCredentials) => {
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
            <PasswordInput label='password' register={register} required />
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


/*

200
OK
201
Created
202
Accepted
302
Found
400
Bad Request
401
Unauthorized
404
Not Found
511
Network Authentication Required

*/



