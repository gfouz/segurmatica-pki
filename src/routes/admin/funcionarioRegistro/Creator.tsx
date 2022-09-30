import * as React from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { HStack, Input, Container } from '@chakra-ui/react';
import { info } from '../common/constants';
import { getRequestEnabled, postRequest } from './constants';
import { IFormInput, IProps } from '../common/constants';
import SelectList from '../entidadRegistro/Select';
import TextInput from '../common/TextInput';
import TelInput from '../common/TelInput';
import SubmitButton from '../common/SubmitButton';
import StatusHandler from '../common/StatusHandler';
import StyledLabel from '../common/StyledLabel';

function Creator(props: { url: string }) {
  const { url } = props;

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
  const response = useMutation((formdata: IFormInput) => postRequest(url, formdata));
  const onSubmit: SubmitHandler<IFormInput> = async (formdata) => {
    response.mutateAsync(formdata);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='1em'>
          <Container>
             <StyledLabel capit>Nombre del funcionario</StyledLabel>
            <TextInput info={info.name} required label='name' register={register} errors={errors} />
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel capit>Teléfono del funcionario</StyledLabel>
            <TelInput required info={info.tel} label='phone' errors={errors} register={register} />
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel capit>Seleccione entidad de registro a la que pertenece</StyledLabel>
            <SelectList list={entidad?.result} label='erId' register={register} required />
            {errors.erId && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel capit>Seleccione usuario al que se vincula</StyledLabel>
            <SelectList list={users?.result} label='userId' register={register} required />
            {errors.userId && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <SubmitButton buttonstate={response?.isLoading} />
      </form>
      {status && <StatusHandler message={status} />}
    </>
  );
}

export default Creator;

