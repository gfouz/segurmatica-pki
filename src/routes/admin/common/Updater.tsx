import * as React from 'react';
import axios from 'axios';
import SuggestedList from './Tooltip';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import StatusHandler from './StatusHandler';
import { useMutation } from 'react-query';
import {
  HStack,
  Button,
  Spinner,
  Input,
  Container,
  Badge,
  Switch,
  FormLabel,
} from '@chakra-ui/react';
import { IDS, provinces, tooltip, number_type, text_type } from './cardStore';

interface IFormInput {
  name: string;
  enabled: boolean;
}
interface IProps {
  labelForId: string;
  labelForName: string;
}
const submitbtn = {
  m: '2em',
  color: '#222222',
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

function Update(props: IProps) {
  const { url, labelForId, labelForName } = props;
  const [id, setId] = React.useState('');
  const [status, setStatus] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  async function putRequest(data: IFormInput) {
    
      try {
        const res = await axiosApi.put(`${url}/${id}`, data);
        setStatus(data.object.message);
        return res.data;
      } catch (err) {
        setStatus(err.message.toString());
      }
  
  }

  const updating = useMutation((data) => putRequest(data), { retry: 2 });
  console.log(updating.data && updating.data.result)
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    data && updating.mutateAsync(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>{labelForId}</strong>
            </label>
            <SuggestedList datalist={IDS} listname='ids' message={tooltip.provincia}>
              <Input
                color='#ffffff'
                list='ids'
                onChange={(evt) => setId(evt.target.value)}
                {...text_type}
              />
            </SuggestedList>
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>{labelForName}</strong>
            </label>
            <SuggestedList datalist={provinces} listname='provincias' message={tooltip.provincia}>
              <Input
                color='#ffffff'
                list='provincias'
                {...register('name', { required: true })}
                {...text_type}
              />
            </SuggestedList>
            {errors.name && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack>
          <FormLabel htmlFor='enabled' m='0 0 0 2em' color='#ab8ffe'>
            Deshabilitar o habilitar
          </FormLabel>
          <Switch {...register('enabled')} id='enabled' size='sm' colorScheme='red' />
        </HStack>
        <Button {...submitbtn}>
          {updating.isLoading ? (
            <div>
              <Spinner size='sm' />
              <Badge>trying...</Badge>
            </div>
          ) : (
            <span>Enviar</span>
          )}
        </Button>
        <span>
          {updating.isSuccess ? (
            <Badge p='5px' colorScheme='green'>
              Enviado con éxito!
            </Badge>
          ) : null}
          {updating.isError && (
            <Badge p='5px' colorScheme='red'>
              Error de red!
            </Badge>
          )}
        </span>
        {status && <StatusHandler message={status} />}
      </form>
    </>
  );
}

export default Update;
