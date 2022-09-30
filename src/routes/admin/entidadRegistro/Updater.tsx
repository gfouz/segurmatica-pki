import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSnapshot } from 'valtio';
import store from '../common/store';
import { state } from '../common/store';
import SuggestedWords from '../common/SuggestedWords';
import StatusHandler from '../common/StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import SubmitButton from '../common/SubmitButton';
import TextInput from '../common/TextInput';
import AlphaNumericInput from '../common/AlphaNumericInput';
import { putRequestById, IFormInput, getRequestAll } from '../common/constants';
import { HStack, Input, Container, Switch, FormLabel, Heading } from '@chakra-ui/react';
import { IDS, emailtips, tooltip, number_type, text_type } from '../common/cardStore';
import SelectList from './Select';
import { info } from './constants';

function Update(props: { url: string }) {
  const [status, setStatus] = React.useState('');
  const snap = useSnapshot(store);
  const snap2 = useSnapshot(state);
  const { stack } = snap;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const url = '/municipios/enabled/true';
  const { data } = useQuery('all-enabled-rolls', () => getRequestAll(url));

  const response = useMutation((data: IFormInput) => putRequestById(data, props.url, stack.id), {
    retry: 2,
  });
  const message = response?.data?.message;

  React.useEffect(() => {
    message && setStatus(message);
    message === 'updated' && snap2.setOption('mostrar');
  }, [message]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    response.mutateAsync(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='2em'>
          <Heading size='md' color='#009966'>
            {stack.name}
          </Heading>
        </HStack>

        <HStack>
          <Container>
            <StyledLabel>Nombre de la Entidad de registro</StyledLabel>

            <TextInput
              info={info.name}
              required
              label='name'
              errors={errors}
              register={register}
              defaultValue={stack.name}
            />
          </Container>
        </HStack>
        <HStack>
          <Container>
            <StyledLabel>Dirección de la entidad de registro</StyledLabel>

            <AlphaNumericInput
              info={info.alpha}
              required
              label='address'
              errors={errors}
              register={register}
              defaultValue={stack.address}
            />
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel>Seleccione municipio de entidad de registro</StyledLabel>

            <SelectList list={data?.result} label='municipioId' register={register} required />

            {errors.municipioId && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack>
          <HStack m='2em 0'>
            <FormLabel htmlFor='enabled' m='0 0 0 2em' color='#ab8ffe'>
              Deshabilitar o habilitar
            </FormLabel>
            <Switch {...register('enabled')} id='enabled' size='sm' colorScheme='red' />
          </HStack>
        </HStack>
        <SubmitButton buttonstate={response?.isLoading} />
        {status && <StatusHandler message={status} />}
      </form>
    </>
  );
}

export default Update;

const StyledLabel = styled.h4`
  color: ${(props) => props.color || '#888888'};
  font-weight: bolder;
`;
