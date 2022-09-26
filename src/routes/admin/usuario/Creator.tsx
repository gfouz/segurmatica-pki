import * as React from 'react';
import axios from 'axios';
import StatusHandler from './StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { HStack, Input, Container } from '@chakra-ui/react';
import { tip } from './constants';
import { postRequest, getRequestAll, IFormInput } from '../common/constants';
import SelectList from './Select';
import SubmitButton from '../common/SubmitButton';
import PasswordInput from '../common/PasswordInput';
import EmailInput from './EmailInput';


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
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>Su email</strong>
            </label>
          
              <EmailInput  register={register} errors={errors}  />
            
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='input-label'>Su contraseña</strong>
            </label>
            
              <PasswordInput label='password' register={register} errors={errors} required />
        
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='input-label'>Seleccione rol de usuario</strong>
            </label>

            <SelectList list={data?.result} label='rolId' register={register} required />

            {errors.rolId && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <SubmitButton buttonstate={response?.isLoading} />
        {status && <StatusHandler message={status} />}
      </form>
    </>
  );
}

export default Creator;
