import * as React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ChakraInput from '../../../components/input/ChakraInput';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useQuery, useMutation, useQueryClient } from 'react-query';

import { ErrorBoundaryContext, useErrorBoundary } from 'react-use-error-boundary';

import { getProvinces, createProvince, IFormInput, requestInfo, getRequest } from './restApi';
import { useMutate, useMyQuery, useSwitch } from '../common/hooks';
import { useCardStore } from '../common/cardStore';
import GetEnabled from '../common/GetEnabled';
import GetById from '../common/GetById';
import Getter from '../common/Getter';
import Updater from '../common/Updater';
import Creator from '../common/Creator';

const submitbtn = {
  m: '2em',
  bg: '#ab8ffe',
  border: '1px solid #ab8ffe',
  size: 'md',
  type: 'submit',
};
import {
  dates,
  tooltips,
  ci_terms,
  dn_terms,
  alertMessage,
  number_type,
  text_type,
  motive_terms,
  provinces,
} from '../../constants';

import {
  Box,
  Flex,
  HStack,
  Button,
  Center,
  Spinner,
  Checkbox,
  Heading,
  Container,
} from '@chakra-ui/react';

//----FORM COMPONENT TO HANDLE PROVINCES.----
export default function Form() {
  const queryClient = useQueryClient();
  const option = useCardStore((state) => state.option);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const addProvince = useMutate(createProvince, 'provincias');
  const query = useQuery('provincias', getRequest);
  //requestInfo(query, toast);
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    option == 'crear' && addProvince.mutateAsync(data);

    //console.log(status.toString())
  };

  return (
    <>
      <StyledForm>
        <div>
          {option == 'mostrar' && (
            <>
              <Getter url='provincias' keys='provincias' />
            </>
          )}
        </div>
        {option == 'buscar' && (
          <>
            <GetById
              url='provincias'
              label='Buscar una provincia por ID.
                 '
            />
          </>
        )}
        {option == 'habilitados' && (
          <>
            <GetEnabled
              keys='provincias-enabled'
              url='provincias/enabled/enable'
              label='Buscar una provincia por ID.
                 '
            />
          </>
        )}

        {option == 'crear' && (
          <>
            <Creator />
          </>
        )}

        {option == 'actualizar' && (
          <>
            <Updater
              url='provincias'
              labelForId='Id de la provincia'
              labelForName='Escriba nombre de provincia'
            />
          </>
        )}
      </StyledForm>
    </>
  );
}

export const StyledForm = styled.div`
  background-color: #222222;
  color: #ab8ffe;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 4em 1em;
  margin: 2em 0;
  border-radius: 20px;

  .input__label {
    font-size: 16px;
    white-space: nowrap;
    font-weight: bolder;
  }
  .input__label--red {
    color: #ffffff;
  }
  .checkbox__label {
    font-size: 16px;
    color: #0660b1;
  }
  .btn-text {
    font-size: 10px;
    color: #000000;
  }
`;
