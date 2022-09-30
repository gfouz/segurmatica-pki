import * as React from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useSnapshot } from 'valtio';
import store from '../common/store';
import StatusHandler from '../common/StatusHandler';
import SelectList from './Select';
import { getRequestAll, putRequestById, councils } from './constants';
import { info } from '../common/constants';
import TextInput from '../common/TextInput';
import { HStack, Flex, Input } from '@chakra-ui/react';
import { VStack, Switch, Heading, FormLabel } from '@chakra-ui/react';
import SubmitButton from '../common/SubmitButton';
import { IFormInput } from '../common/constants';
import StyledLabel from '../common/StyledLabel';

function Update(props: { url: string }) {
  const snap = useSnapshot(store);
  const { stack } = snap;

  const path = '/provincias';
  const { data } = useQuery('council', () => getRequestAll(path));
  const [id, setId] = React.useState('');
  const [status, setStatus] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const response = useMutation((formdata: any) => putRequestById(formdata, props.url, stack.id), {
    retry: 2,
  });
  const message = response?.data?.message;

  React.useEffect(() => {
    message && setStatus(message);
  }, [message]);

  const onSubmit: SubmitHandler<IFormInput> = async (formdata) => {
    response.mutateAsync(formdata);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack m='1em 0' align='left'>
          <StyledLabel color='#009966' capit>
            {stack.name}
          </StyledLabel>
        </VStack>
        <VStack align='left'>
          <StyledLabel>Nombre de Municipio</StyledLabel>
          <TextInput info={info.name} required label='name' errors={errors} register={register} />
        </VStack>

        <VStack align='left'>
          <StyledLabel>Provincia a que pertenece</StyledLabel>
          <SelectList list={data?.result} label='provinciaId' register={register} required />
          {errors.provinciaId && <span style={{ color: 'red' }}>Field is required</span>}
        </VStack>

        <VStack align='left'>
          <StyledLabel>Deshabilitar o habilitar</StyledLabel>
          <Switch
            {...register('enabled')}
            size='sm'
            colorScheme='red'
            defaultChecked={stack.enabled}
          />
        </VStack>
        <SubmitButton buttonstate={response?.isLoading} />
        {status && <StatusHandler message={status} />}
      </form>
    </>
  );
}

export default Update;

