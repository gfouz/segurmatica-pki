import * as React from 'react';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { info } from '../admin/common/constants';
import styled from 'styled-components';
import StatusHandler from './StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import SubmitButton from './SubmitButton';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import StyledLabel from '../admin/common/StyledLabel'
import ErrorWarning from '../admin/common/ErrorWarning';
import { Flex } from '@chakra-ui/react';

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

//personalizar los toast.
const Form = () => {
  //const navigate = useNavigate();
  const [status, setStatus] = React.useState('');
  //const [token, setToken] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  async function postRequest(formdata: IFormInput): Promise<IFormInput | any> {
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
    (value: IFormInput) => postRequest(value),
  );
  const onSubmit: SubmitHandler<IFormInput> = (formData: IFormInput) => {
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
    <StyledBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction='column'>
          <StyledLabel m='2em 0' color='#009966' upper center>
              Inicio de sesión.
          </StyledLabel>
            <StyledLabel m='1em 0 0 0'>
              Correo electrónico
            </StyledLabel>
            <EmailInput 
              register={register} 
              errors={errors} 
              info={info.email} 
              />
            <ErrorWarning label='email' errors={errors} m='0 2em' />
            <StyledLabel m='1em 0 0 0'>
              Contraseña
            </StyledLabel>
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
