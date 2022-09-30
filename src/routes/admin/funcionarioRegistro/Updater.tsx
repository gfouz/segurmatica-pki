import * as React from 'react';
import styled from 'styled-components';
import store from '../common/store';
import { state } from '../common/store';
import { useSnapshot } from 'valtio';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { HStack, Input, Container, Switch } from '@chakra-ui/react';
import { info } from '../common/constants';
import { getRequestEnabled, putRequestById } from './constants';
import { IFormInput } from '../common/constants';
import SelectList from '../entidadRegistro/Select';
import StatusHandler from '../common/StatusHandler';
import SubmitButton from '../common/SubmitButton';
import TextInput from '../common/TextInput';
import TelInput from '../common/TelInput';
import StyledLabel from '../common/StyledLabel';

function Updater(props: { url: string }) {
  const { url } = props;

  const snap = useSnapshot(store);
  const snap2 = useSnapshot(state);
  const { stack } = snap;
  const { setOption } = snap2;

  const [status, setStatus] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const url1 = '/users/enabled/true';
  const url2 = '/entidades-registro/enabled/true';
  const { data: entidad } = useQuery('entidad-actived', () => getRequestEnabled(url2));
  const { data: users } = useQuery('users-act', () => getRequestEnabled(url1));

  const response = useMutation((formdata: any) => putRequestById(formdata, props.url, stack.id));

  const message = response?.data?.message;

  React.useEffect(() => {
    message && setStatus(message);
    message === 'updated' && setOption('mostrar');
  }, [message]);

  const onSubmit: SubmitHandler<IFormInput> = async (formdata) => {
    response.mutateAsync(formdata);
    console.log(formdata)
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='1em'>
          <Container>
            <StyledLabel capit>Actualice nombre</StyledLabel>
            <TextInput 
             info={info.name} 
             required label='name' 
             register={register} 
             errors={errors} 
             defaultValue={stack.name}
             />
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel capit>Teléfono del funcionario de registro.</StyledLabel>
            <TelInput 
              required 
              info={info.tel} 
              label='phone' 
              errors={errors} 
              register={register}
              defaultValue={stack.phone} 
              />
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel capit>Seleccione entidad de registro a la que pertenece</StyledLabel>
            <SelectList 
             list={entidad?.result} 
             label='erId' 
             register={register} 
             required 
             />
            {errors.erId && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel capit>Seleccione usuario al que se vincula</StyledLabel>
            <SelectList 
              list={users?.result} 
              label='userId' 
              register={register} 
              required 
              />
            {errors.userId && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack m='1em 2em'>
          <StyledLabel capit>Deshabilitar o habilitar</StyledLabel>
          <Switch
            {...register('enabled')}
            id='enabled'
            size='sm'
            colorScheme='red'
            defaultChecked={stack.enabled}
          />
        </HStack>
        <SubmitButton buttonstate={response?.isLoading} />
      </form>
      {status && <StatusHandler message={status} />}
    </>
  );
}

export default Updater;

