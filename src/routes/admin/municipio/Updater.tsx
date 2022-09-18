import * as React from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useSnapshot } from 'valtio';
import store from '../common/store';
import SuggestedList from './Tooltip';
import StatusHandler from '../common/StatusHandler';
import SelectList from './Select';
import { getRequestAll, putRequestById, councils } from './constants';
import { tip } from './constants';
import { text_type } from '../common/constants';
import { HStack, Flex, Input } from '@chakra-ui/react';
import { VStack, Switch, Heading, FormLabel } from '@chakra-ui/react';
import SubmitButton from '../common/SubmitButton';
import { IFormInput } from '../common/constants';

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
    formdata && response.mutateAsync(formdata);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack m='1em 0' align='left'>
          <Heading size='md' color='#009966' textTransform='capitalize'>
            {stack.name}
          </Heading>
        </VStack>
        <VStack align='left'>
          <FormLabel size='sm' color='#333333'>
            Actulice nombre
          </FormLabel>

          <SuggestedList datalist={councils} listname='rolid' message={tip.name}>
            <Input
              list='rolid'
              {...register('name', { required: true })}
              {...text_type}
              defaultValue={stack.name}
            />
          </SuggestedList>
          {errors.name && <span style={{ color: 'red' }}>Field is required</span>}
        </VStack>

        <VStack align='left'>
          <Heading size='sm' m='2em 0 0.5em 0'>
            Provincia a que pertenece
          </Heading>
          <SelectList list={data?.result} label='provinciaId' register={register} required />
          {errors.provinciaId && <span style={{ color: 'red' }}>Field is required</span>}
        </VStack>

        <VStack align='left'>
          <Heading size='sm' color='#444444' m='2em 0 0 0'>
            Deshabilitar o habilitar
          </Heading>
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
