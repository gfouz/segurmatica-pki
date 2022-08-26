import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import { theme } from '../constants';
import ToastVariant from '../../components/Toast';
import {
  Box,
  Flex,
  HStack,
  Button,
  Center,
  Input,
  Spinner,
  Badge,
  Heading,
  Container,
} from '@chakra-ui/react';

function Admin() {
  const navigate = useNavigate();

  const token = localStorage.getItem('jwt');

  /*React.useEffect(() => {
    setTimeout(() => {
      !token && navigate('/login');
    }, 2000);
  });*/


  return (
    <StyledAdmin>
      <ToastVariant linear={theme.green} color='#ffffff' />
      <section className='admin'>
        <h1 className='admin__title'>Administración general</h1>
        <div className='admin__list'>
          <ul className='list'>
            <li className='list__item'>
              <Link to='/'>Inicio</Link>
            </li>
            <li className='list__item'>
              <Link to='/rols'>Administrar rol</Link>
            </li>
            <li className='list__item'>
              <Link to='/users'>Administrar usuario</Link>
            </li>
            <li className='list__item'>
              <Link to='/provinces'>Administrar provincias</Link>
            </li>
          </ul>
        </div>
      </section>
    </StyledAdmin>
  );
}

export default Admin;

const StyledAdmin = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(./images/admin.jpg);
  background-position: center center;
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-size:  cover;  
  .admin {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .admin__title {
    margin: 2em 0;
    color: #5da8cf;
    text-transform: uppercase;
    font-size: 1.5em;
  }
  .admin__list {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .list {
  }
  .list__item {
    margin: 3em 0;
    list-style-type: none;
    min-width: 250px;
    background-color: #9da6cb;
    a {
      color: #222222;
      padding: 1em;
      background-color: #c1b6d4;
      text-transform: uppercase;
      font-weight: bolder;
      border-radius: 8px;
    }
  }

  .admin__logo {
    width: 300px;
    border-radius: 10px;
    background-color: #00000099;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #ffffff;
    font-size: 1.7em;
    font-weight: bolder;
    font-family: calibri;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  .admin__image {
    max-width: 100%;
    height: auto;
  }
  .bg-grey {
    background-color: #3a3839;
  }
`;

//git clone https://github.com/gfouz/pki-frontend.git
