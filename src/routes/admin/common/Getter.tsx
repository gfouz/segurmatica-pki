import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StatusHandler from './StatusHandler';
import styled from 'styled-components';
import ChakraInput from '../../../components/input/ChakraInput';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useQuery } from 'react-query';
import { provinces, tooltip, useLocalStorage } from './cardStore';
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

//const payload = localStorage.getItem("jwt")

const BASE_URL = 'http://localhost:5000/';

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});
//axiosApi.defaults.headers.common['jwt'] = payload;

export default function Getter(props) {
  const [token, setToken] = useState(() => localStorage.getItem('jwt'));
  axiosApi.defaults.headers.common['jwt'] = token;

  const [status, setStatus] = useState('');
  const { url, keys, name, email, password, rol } = props;

  async function getRequest() {
    try {
      const res = await axiosApi.get(url);
      const data = {
        object: res.data,
      };
      setStatus(data.object.message);
      return data.object.result;
    } catch (err) {
      setStatus(err.message);
      //return err;
    }
  }

  const { data, isLoading, isError } = useQuery(keys, getRequest);
  //console.log(`this is payload: ${payload}`)

  React.useEffect(() => {
    setToken(localStorage.getItem('jwt'));
  });

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
                <li className='list__item'>Nro de ID: {item.id}</li>
                <li className='list__item'>
                  {name} {item.name}
                </li>
                <li className='list__item'>
                  {email} {item.email}
                </li>
                <li className='list__item'>
                  {password} {item.password}
                </li>
                <li className='list__item'>
                  Estado: {item.enabled ? 'habilitado' : 'deshabilitado'}
                </li>
                <li className='list__item'>
                  {rol} {item.rolId}
                </li>
              </ul>
            ))}
        </div>
      }
      {status && <StatusHandler message={status} />}
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
    text-align: left;
    list-style-type: none;
  }
  ul li:nth-child(4) {
    color: green;
  }
  ul li:nth-child(1) {
    color: brown;
  }
`;

/*
  headers: {
    'jwt': token
  }

  */
