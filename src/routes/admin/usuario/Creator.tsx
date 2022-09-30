import * as React from 'react';
import axios from 'axios';
import StatusHandler from './StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { HStack, Input, Flex } from '@chakra-ui/react';
import { info } from '../common/constants';
import { postRequest, getRequestAll, IFormInput } from '../common/constants';
import SelectList from './Select';
import SubmitButton from '../common/SubmitButton';
import PasswordInput from '../common/PasswordInput';
import EmailInput from './EmailInput';
import StyledLabel from '../common/StyledLabel';

const BASE_URL = 'http://localhost:5000';
const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});
axiosApi.defaults.headers.common['Content-Type'] = 'application/json';

function Creator(props: { path: string }) {
  const { path } = props;
  const [status, setStatus] = React.useState('');
  const [list, setList] = React.useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const url = '/rols/enabled/true';
  const { data } = useQuery('all-enabled-rolls', () => getRequestAll(url));

  const response = useMutation((user: IFormInput) => postRequest(path, user));
  const message = response?.data?.message;

  React.useEffect(() => {
    setStatus(message);
  }, [message]);

  const onSubmit: SubmitHandler<IFormInput> = async (formdata) => {
    response?.mutateAsync(formdata);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction='column'>
          <StyledLabel color='#009966' m='1em 0' capit>
            Añadir usuario
          </StyledLabel>
          <StyledLabel capit>Correo electrónico.</StyledLabel>
          <EmailInput 
            register={register} 
            errors={errors} 
            info={info.email}
            />
          <StyledLabel capit>Escriba contraseña.</StyledLabel>
          <PasswordInput label='password' register={register} errors={errors} required />

          <StyledLabel color='#009966' capit>
            Seleccione rol de usuario.
          </StyledLabel>
          <SelectList list={data?.result} label='rolId' register={register} required />
          {errors.rolId && <span style={{ color: 'red' }}>Field is required</span>}

          <SubmitButton buttonstate={response?.isLoading} />
          {status && <StatusHandler message={status} />}
        </Flex>
      </form>
    </>
  );
}

export default Creator;
