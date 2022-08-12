import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ChakraInput from '../../../components/input/ChakraInput';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useQuery } from 'react-query';
import { provinces, tooltip } from './cardStore';
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

interface IFormInput {
  id?: string;
  name?: string;
}
interface IInitialData {
  id: string;
  name: string;
  enabled: boolean;
}
const initialState: IInitialData = {
  id: 'unknown',
  name: 'unknown',
  enabled: false,
};
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

export default function Getter(props) {
  const [status, setStatus] = useState('');

  const format = (res) => {
    return JSON.stringify(res, null, 2);
  };

  async function getRequest() {
    try {
      const res = await axiosApi.get(props.url);
      const result = {
        data: res.data,
        status: res.status,
        statusText: res.statusText,
      };
      return result.data;
    } catch (err) {
      setStatus(err.message);
      return err;
    }
  }

  const { data, isLoading, isError } = useQuery(props.keys, getRequest);

  return (
    <StyledGetter>
      {isError && <div>An error ocurred...</div>}
      {isLoading && (
        <div>
          <Spinner size='sm' color='white' />
          <Heading color='white'>Loading...</Heading>
        </div>
      )}
      {
        <div className='list-container'>
          {Array.isArray(data) &&
            data.map((item) => (
              <ul className='list' key={item.id}>
                <li className='list__item'>Número de ID: {item.id}</li>
                <li className='list__item'>Provincia: {item.name}</li>
                <li className='list__item'>
                  Estado: {item.enabled ? 'habilitado' : 'deshabilitado'}
                </li>
              </ul>
            ))}
        </div>
      }
      {status === 'Network Error' && (
        <Heading color='#fff4a3' size='sm'>
          {status}
        </Heading>
      )}
    </StyledGetter>
  );
}

const StyledGetter = styled.div`
  .list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #222222;
  }
  .list {
    padding: 0;
    margin: 0;
    border-radius: 10px;
    width: 200px;
    padding: 1em;
    margin: 0.2em;
    background-color: #000000;
    box-shadow: 1px 1px 10px #999999;
  }
  .list__item {
    color: #999999;
    text-align: left;
    list-style-type: none;
  }
`;
