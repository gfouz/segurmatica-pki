import * as React from 'react';
import { useCardStore } from './common/cardStore';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import { theme } from '../constants';
import ToastVariant from '../../components/Toast';
import { Input, Spinner, Badge, Heading, Box } from '@chakra-ui/react';
import { Flex, HStack, Button, Center, Container } from '@chakra-ui/react';
import { useSnapshot } from 'valtio';
import { state } from './common/store';

function Admin() {
  const snap = useSnapshot(state);
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
              <Link to='/rols' onClick={() => snap.setOption('mostrar')}>
                Rols
              </Link>
            </li>
            <li className='list__item'>
              <Link to='/users' onClick={() => snap.setOption('mostrar')}>
                Usuarios
              </Link>
            </li>
            <li className='list__item'>
              <Link to='/tarifas' onClick={() => snap.setOption('mostrar')}>
                Tarifas
              </Link>
            </li>
            <li className='list__item'>
              <Link to='/estados' onClick={() => snap.setOption('mostrar')}>
                Estados
              </Link>
            </li>
            <li className='list__item'>
              <Link to='/empresasInstituciones' onClick={() => snap.setOption('mostrar')}>
                Empresas-instituciones
              </Link>
            </li>
            <li className='list__item'>
              <Link to='/condiciones' onClick={() => snap.setOption('mostrar')}>
                Admin...Condiciones
              </Link>
            </li>
            <li className='list__item'>
              <Link to='/representante' onClick={() => snap.setOption('mostrar')}>
                Representante
              </Link>
            </li>
            <li className='list__item'>
              <Link to='/municipios' onClick={() => snap.setOption('mostrar')}>
                Municipios
              </Link>
            </li>
            <li className='list__item'>
              <Link to='/provinces' onClick={() => snap.setOption('mostrar')}>
                Provincias
              </Link>
            </li>
            <li className='list__item'>
              <Link to='/organismos' onClick={() => snap.setOption('mostrar')}>
                Organismos
              </Link>
            </li>
            <li className='list__item'>
              <Link to='/funcionalidades' onClick={() => snap.setOption('mostrar')}>
                Funcionalidades
              </Link>
            </li>
            <li className='list__item'>
              <Link to='/entidadRegistro' onClick={() => snap.setOption('mostrar')}>
                Entidad de Registro
              </Link>
            </li>
            <li className='list__item'>
              <Link to='/funcionarioregistro' onClick={() => snap.setOption('mostrar')}>
                Funcionario de Registro
              </Link>
            </li>
            <li className='list__item'>
              <Link to='/generacion' onClick={() => snap.setOption('mostrar')}>
                Generación
              </Link>
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
  background-image: url(./images/coffee.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  .admin {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .admin__title {
    margin: 2em 0;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 1.5em;
    text-shadow: 5px 5px 10px black;
  }
  .admin__list {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .list__item {
    margin: 3em 1em;
    list-style-type: none;
    min-width: 250px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px black;
    background-color: #e8e1db;
    a {
      color: #444444;
      padding: 1em;
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
