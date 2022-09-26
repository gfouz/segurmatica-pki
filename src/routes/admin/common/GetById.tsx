import React, { useState } from 'react';
import styled from 'styled-components';
import StatusHandler from './StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useQuery } from 'react-query';
import { IDS, tooltip, text_type } from './cardStore';
import SuggestedList from './Tooltip';
import { getRequestById, IFormInput } from './constants';
import ObjectIterator from './ObjectIterator';
import SpinnerIcon from './Spinner';
import SubmitButton from '../common/SubmitButton';

import { HStack, Input, Container } from '@chakra-ui/react';

export default function GetById(props: { url: string; queryKey: string; msg?: string }) {
  const { url, msg, queryKey } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const [id, setId] = useState('');
  const [status, setStatus] = useState('');
  const { data, isLoading, refetch } = useQuery(queryKey, () => getRequestById(url, id), {
    staleTime: 2000,
  });
  const loading = isLoading;
  const response = data?.result;
  const message = data?.message;

  React.useEffect(() => {
    setStatus(message);
  }, [message]);

  const onSubmit: SubmitHandler<IFormInput> = async (id) => {
    refetch();
  };

  return (
    <>
      <StyledGetter>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HStack p='1em'>
            <Container>
              <label htmlFor='provinces'>
                <strong className='byid-input-label'>Buscar por ID</strong>
              </label>
              <SuggestedList message={msg}>
                <Input
                  list='provincias'
                  {...register('id', { required: true })}
                  onChange={(evt) => setId(evt.target.value)}
                  size='sm'
                  type='number'
                  variant='flushed'
                />
              </SuggestedList>
              <SubmitButton buttonstate={response?.isLoading} />
            </Container>
          </HStack>
          {errors.id && <span style={{ color: 'red' }}>Field is required</span>}
        </form>
        <HStack>{isLoading ? <SpinnerIcon /> : <ObjectIterator data={response} />}</HStack>
        <HStack>{status && <StatusHandler message={status} />}</HStack>
      </StyledGetter>
    </>
  );
}

const StyledGetter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
