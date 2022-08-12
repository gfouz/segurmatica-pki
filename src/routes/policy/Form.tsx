import * as React from 'react';
import axios from 'axios';
import { HStack } from '@chakra-ui/react';
import styled from 'styled-components';
import ChakraInput from '../../components/input/ChakraInput';
import { useForm, SubmitHandler } from 'react-hook-form';

import { text_type } from '../constants';

const url = 'http://localhost:4000/users/';

interface IFormInput {
  id?: string;
}
const initialState = {
  id: 0,
  name: '',
};

const Form = () => {
  const [user, setUser] = React.useState(initialState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { id } = data;
    axios
      .get(`http://localhost:4000/users/${id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <HStack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label style={{ color: errors.id ? 'red' : '#222222' }}>
            <strong className='input__label'>Nro de ID</strong>
          </label>
          <ChakraInput
            label='id'
            register={register}
            htmlAttributes={text_type}
            placeholder={errors.id && 'Escriba Nro de CI!'}
            _placeholder={{ color: errors.id && 'red.400' }}
          />
          <button type='submit'>submit</button>
        </form>
      </HStack>
      <HStack></HStack>
    </>
  );
};

export default Form;
