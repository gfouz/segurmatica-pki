import * as React from 'react';
import styled from 'styled-components';
import StatusHandler from '../common/StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { HStack, Input, Container } from '@chakra-ui/react';
import { info } from './constants';
import { getRequestEnabled, postRequest, text_type, IFormInput } from '../common/constants';
import SuggestedWords from '../common/SuggestedWords';
import SubmitButton from '../common/SubmitButton';
import TextInput from '../common/TextInput';
import SelectList from './Select';
import ErrorWarning from '../common/ErrorWarning';

function Creator(props: { url: string }) {
  const [status, setStatus] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const companies = '/empresas-instituciones';
  const organismos = '/organismos/enabled/true';
  const municipios = '/municipios/enabled/true';
  const { data: org } = useQuery('org-all', () => getRequestEnabled(organismos));
  const { data: mun } = useQuery('users-act', () => getRequestEnabled(municipios));

  const response = useMutation((formdata: IFormInput) => postRequest(companies, formdata));

  const onSubmit: SubmitHandler<IFormInput> = async (formdata) => {
    response.mutateAsync(formdata);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='1em'>
          <Container>
            <StyledLabel>Nombre de empresa o instit...</StyledLabel>

            <TextInput label='name' register={register} errors={errors} required info={info.name} />
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel>seleccione organismo</StyledLabel>

            <SelectList list={org?.result} label='organismoId' register={register} required />
            <ErrorWarning label='organismoId' errors={errors} info={info.select} />
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel>seleccione municipio</StyledLabel>

            <SelectList list={mun?.result} label='municipioId' register={register} required />
            <ErrorWarning label='municipioId' errors={errors} info={info.select} />
          </Container>
        </HStack>
        <SubmitButton buttonstate={response?.isLoading} />
        {status && <StatusHandler message={status} />}
      </form>
    </>
  );
}

export default Creator;

const StyledLabel = styled.h4`
  color: #888888;
  font-weight: bolder;
`;
