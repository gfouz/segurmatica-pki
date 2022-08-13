import * as React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import { HStack, Button, Spinner, Input, Container, Badge } from '@chakra-ui/react';
import { IDS, provinces, tooltip, number_type, text_type } from './cardStore';
import Alert from './Tooltip';

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

const BASE_URL = 'http://localhost:5000/';
const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});
axiosApi.defaults.headers.common['Content-Type'] = 'application/json';

function Creator(props) {
  const [status, setStatus] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  async function postRequest(data: IFormInput) {
      try {
        const res = await axiosApi.post(props.url, data);
        setStatus(res.status.toString());
        return res.data;
      } catch (err) {
        setStatus(err.message.toString());
      }
  }

  const addProvince = useMutation(postRequest);
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    data && addProvince.mutateAsync(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>{props.labelForName}</strong>
            </label>
            <Alert datalist={provinces} listname='provincias' message={tooltip.provincia}>
              <Input
                color='#ffffff'
                list='provincias'
                {...register('name', { required: true })}
                {...text_type}
              />
            </Alert>
            {errors.name && <span style={{ color: 'red' }}>Field is required</span>}

          </Container>
        </HStack>
        <Button {...submitbtn}>
          {addProvince.isLoading ? (
            <div>
              <Spinner size='sm' />
              <Badge>trying...</Badge>
            </div>
          ) : (
            <span>Enviar</span>
          )}
        </Button>
        <span>
          {addProvince.isSuccess && (
            <Badge p='5px' colorScheme='green'>
              Enviado con éxito!
            </Badge>
          )}
          {addProvince.isError && (
            <Badge p='5px' colorScheme='red'>
              Error de red!
            </Badge>
          )}
        </span>
      </form>
    </>
  );
}

export default Creator;
