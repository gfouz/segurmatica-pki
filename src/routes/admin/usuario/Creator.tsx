import * as React from 'react';
import axios from 'axios';
import StatusHandler from './StatusHandler';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { HStack, Button, Spinner, Input, Container, Badge, Select } from '@chakra-ui/react';
import { IDS, provinces, tooltip } from '../common/cardStore';
import { password_type, number_type, text_type, email_type } from '../common/cardStore';
import SuggestedList from '../common/Tooltip';

interface IFormInput {
  name: string;
}
const submitbtn = {
  color: '#222222',
  m: '2em',
  bg: '#ab8ffe',
  border: '1px solid #ab8ffe',
  size: 'md',
  type: 'submit',
};

const BASE_URL = 'http://localhost:5000';
const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});
axiosApi.defaults.headers.common['Content-Type'] = 'application/json';

function Creator(props) {
  const [status, setStatus] = React.useState('');
  const [list, setList] = React.useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  async function getRequest() {
    try {
      const res = await axiosApi.get('/funcionalidades');
      const data = { object: res.data };
      setList(data.object.result);
      setStatus(data.object.message);
      console.log(data.object.message)
      return data.object.result;
    } catch (err) {
      setStatus(err.message);
      //return err;
    }
  }

  async function postRequest(data: IFormInput) {
    try {
      const res = await axiosApi.post('/users', data);
      setStatus(res.data.message);
      return res.data;
    } catch (err) {
      setStatus(err.response?.data.error);
    }
  }
  const { data, isLoading, isError } = useQuery('functions', getRequest);
  const build = useMutation(postRequest);
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    data && build.mutateAsync(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>Escriba su Email</strong>
            </label>
            <SuggestedList datalist={provinces} listname='provincias' message={tooltip.provincia}>
              <Input
                color='#ffffff'
                list='provincias'
                {...register('email', { required: true })}
                {...email_type}
              />
            </SuggestedList>
            {errors.email && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>Escriba su contraseña</strong>
            </label>
            <SuggestedList datalist={provinces} listname='provincias' message={tooltip.provincia}>
              <Input
                color='#ffffff'
                list='provincias'
                {...register('password', { required: true })}
                {...password_type}
              />
            </SuggestedList>
            {errors.password && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>Seleccione un rol</strong>
            </label>
        <Select 
         {...register('rolid', { required: true })} 
         placeholder='Select option' 
         size='sm' bg='#999999' color='#000000'
         >
             {list && (list.map((funct, key) => {
              return (<option key={key} value={funct.id}>
                         {funct.name}
                      </option>); }))
             }
        </Select>
          {errors.rolid && <span style={{ color: 'red' }}>Field is required</span>}
       </Container>
        </HStack>
        <Button {...submitbtn}>
          {build.isLoading ? (
            <div>
              <Spinner size='sm' />
              <Badge>trying...</Badge>
            </div>
          ) : (
            <span>Enviar</span>
          )}
        </Button>
        {status !== 'Email ya registrado' && (
          <span>
            {build.isSuccess && (
              <Badge p='5px' colorScheme='green'>
                Enviado con éxito!
              </Badge>
            )}
            {build.isError && (
              <Badge p='5px' colorScheme='red'>
                Ocurrio un error!
              </Badge>
            )}
          </span>
        )}
         {status && <StatusHandler message={status} />}
      </form>
    </>
  );
}

export default Creator;



           /* <SuggestedList datalist={provinces} listname='provincias' message={tooltip.provincia}>
              <Input
                color='#ffffff'
                list='provincias'
                {...register('rolId', { required: true })}
                {...number_type}
              />
            </SuggestedList> */