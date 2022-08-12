import * as React from 'react';
import styled from 'styled-components';
import { createProvince } from './restApi';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import ChakraInput from '../../../components/input/ChakraInput';
import { HStack, Button, Spinner, Input, Container, Badge } from '@chakra-ui/react';
import { provinces, tooltips, text_type } from '../../constants';

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

function Creator(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const addProvince = useMutation(createProvince, 'provincias');
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    data && addProvince.mutateAsync(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='input__label input__label--red'>Añadir una provincia.</strong>
            </label>
            <ChakraInput
              color='#ffffff'
              list='provinces'
              datalist={provinces}
              label='name'
              message={tooltips.province}
              register={register}
              htmlAttributes={text_type}
              placeholder={errors.provinces && 'Escriba Nro de CI!'}
              _placeholder={{ color: errors.id && 'red.400' }}
            />
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
