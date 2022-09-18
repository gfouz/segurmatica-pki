import * as React from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useSnapshot } from 'valtio';
import store from '../common/store';
import { state } from '../common/store';
import SuggestedWords from '../common/SuggestedWords';
import StatusHandler from '../common/StatusHandler';
import SelectList from './Select';
import { empresas, tip } from './constants';
import { IFormInput, text_type, getRequestAll, putRequestById } from '../common/constants';
import { HStack, Input, Heading } from '@chakra-ui/react';
import { Container, Switch, FormLabel } from '@chakra-ui/react';
import SubmitButton from '../common/SubmitButton';

function Update(props: { url: string; }) {
  const snap = useSnapshot(store);
  const snap2 = useSnapshot(state);
  const { stack } = snap;
  const path1 = '/municipios';
  const path2 = '/organismos';
  const { data: mun } = useQuery('municipios', () => getRequestAll(path1));
  const { data: org } = useQuery('organismos', () => getRequestAll(path2));

  const [status, setStatus] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const response = useMutation((formdata: IFormInput) => putRequestById(formdata, props.url, stack.id), {
    retry: 2,
  });
  const message = response?.data?.message;

  React.useEffect(() => {
    message && setStatus(message);
    message === 'updated' && snap2.setOption('mostrar');
  }, [message]);

  const onSubmit: SubmitHandler<IFormInput> = async (formdata) => {
    response.mutateAsync(formdata);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='2em'>
          <Heading size='md' color='#009966'>
            {stack.name}
          </Heading>
        </HStack>

        <HStack m='2em 0'>
          <Container>
            <label htmlFor='name'>
              <strong className='byid-input-label'>Actulice nombre</strong>
            </label>
            <SuggestedWords datalist={empresas} listname='rolid' message={tip.name}>
              <Input list='rolid' {...register('name', { required: true })} {...text_type} />
            </SuggestedWords>
            {errors.name && <StyledWarning>Field is required</StyledWarning>}
          </Container>
        </HStack>

        <HStack p='1em'>
          <label htmlFor='municipio'>
            <strong className='byid-input-label'>Actualice municipio</strong>
          </label>
          <SelectList list={mun?.data?.result} label='municipioId' register={register} required />
          {errors.municipioId && <StyledWarning>Field is required</StyledWarning>}
        </HStack>

        <HStack p='1em'>
          <label htmlFor='organismos'>
            <strong className='input-label'>Actulice Organismo</strong>
          </label>
          <SelectList list={org?.data?.result} label='organismoId' register={register} required />
          {errors.organismoId && <StyledWarning>Field is required</StyledWarning>}
        </HStack>

        <HStack m='2em 0'>
          <FormLabel htmlFor='enabled' m='0 0 0 2em' color='#ab8ffe'>
            Deshabilitar o habilitar
          </FormLabel>
          <Switch
            {...register('enabled')}
            size='sm'
            colorScheme='red'
            defaultChecked={stack.enabled}
          />
        </HStack>
        <SubmitButton buttonstate={response?.isLoading} />
        {status && <StatusHandler message={status} />}
      </form>
    </>
  );
}

export default Update;

const StyledWarning = styled.span`
  color: red;
  font-weight: bolder;
`;
