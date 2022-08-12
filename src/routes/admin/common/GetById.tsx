import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ChakraInput from '../../../components/input/ChakraInput';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useQuery } from 'react-query';
import { IDS, provinces, tooltip, number_type } from './cardStore';
import Alert from './Tooltip';
import {
  Box,
  Flex,
  HStack,
  Button,
  Center,
  Spinner,
  Input,
  Heading,
  Container,
} from '@chakra-ui/react';

const submitbtn = {
  color: '#222222',
  m: '2em 0',
  bg: '#ab8ffe',
  border: '1px solid #ab8ffe',
  size: 'md',
  type: 'submit',
};

interface IFormInput {
  id?: string;
  name?: string;
}

export type IProvince = {
  id: string;
  name: string;
  enabled: boolean;
};
interface IProvinceList {
  data: IProvince[];
}
const BASE_URL = 'http://localhost:5000/';

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

axiosApi.defaults.headers.common['Content-Type'] = 'application/json';

export default function GetById(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const [id, setId] = useState('');

  const format = (res) => {
    return JSON.stringify(res, null, 2);
  };

  async function getRequest() {
    if (id) {
      try {
        const res = await axiosApi.get(`${props.url}/${id}`);
        const result = {
          data: res.data,
          status: res.status,
          statusText: res.statusText,
        };
        return result.data;
      } catch (err) {
        //setStatus(format(err.response?.data || err));
      }
    }
  }

  const { data, status, refetch: refetching } = useQuery('provincias__id', getRequest);

  function retryData() {
    try {
      refetching();
    } catch (err) {
      return err;
    }
  }
  const onSubmit: SubmitHandler<IFormInput> = async (id) => {
    if (data !== undefined) {
    }
    retryData();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>{props.label}</strong>
            </label>
            <Alert datalist={IDS} listname='provincias' message={tooltip.provincia}>
              <Input
                color='#ffffff'
                list='provincias'
                message={tooltip.province}
                {...register('id', { required: true })}
                onChange={(evt) => setId(evt.target.value)}
                {...number_type}
              />
            </Alert>
            <Button {...submitbtn}>Enviar</Button>
          </Container>
        </HStack>
        {errors.id && <span style={{ color: 'red' }}>Field is required</span>}
      </form>
      <StyledGetter>
        {status === 'error' && (
          <div>
            <Spinner size='sm' />
            An error ocurred...
          </div>
        )}
        {status === 'loading' && (
          <div>
            <Spinner size='sm' />
            Loading...
          </div>
        )}
        {data && (
          <div className='list-container'>
            <ul className='list'>
              <li className='list__item'>Nro de ID: {data.id}</li>
              <li className='list__item'>Provincia: {data.name}</li>
              <li className='list__item'>
                  Estado: {data.enabled ? 'habilitado' : 'deshabilitado'}
              </li>
            </ul>
          </div>
        )}
      </StyledGetter>
    </>
  );
}

const StyledGetter = styled.div`
  .list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .list {
    padding: 0;
    margin: 0;
    border-radius: 10px;
    width: 200px;
    padding: 1em;
    margin: 0.2em;
    background-color: #000000;
    box-shadow: 1px 1px 10px #ab8ffe;
  }
  .list__item {
    color: #f1f1f1;
    text-align: left;
    list-style-type: none;
  }
  .byid-input-label {
    color: #ffffff;
  }
`;
