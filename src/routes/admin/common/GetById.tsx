import React, { useState } from 'react';
import styled from 'styled-components';
import StatusHandler from './StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useQuery } from 'react-query';
import { info } from './constants';
import SuggestedList from './Tooltip';
import { getRequestById, IFormInput } from './constants';
import ObjectIterator from './ObjectIterator';
import SpinnerIcon from './Spinner';
import SubmitButton from '../common/SubmitButton';
import StyledLabel from './StyledLabel';
import NumericInput from './NumericInput';

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
  React.useEffect(()=>{
    refetch();
  }, [id])

  const onSubmit: SubmitHandler<IFormInput> = async (id) => {
    const num = id;
    setId(num.id);
  };

  return (
    <>
      <StyledGetter>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HStack p='1em'>
            <Container>
              <StyledLabel>Buscar por ID</StyledLabel>
                <NumericInput 
                  label='id' 
                  register={register} 
                  errors={errors} 
                  required 
                  info={info.numeric}
                  />
              <SubmitButton buttonstate={response?.isLoading} />
            </Container>
          </HStack>
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
