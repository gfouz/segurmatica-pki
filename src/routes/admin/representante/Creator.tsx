import * as React from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { HStack, Input, Container } from '@chakra-ui/react';
import { info } from '../common/constants';
import { getRequestEnabled, postRequest, file_type } from './constants';
import { IFormInput } from './constants';
import SuggestedWords from '../common/SuggestedWords';
import StatusHandler from '../common/StatusHandler';
import SelectList from './Select';
import SubmitButton from '../common/SubmitButton';
import IntegerInput from './IntegerInput';
import TextInput from './TextInput';
import TelInput from './TelInput';
import ErrorWarning from '../common/ErrorWarning';
import IdentityNumberInput from './IdentityNumberInput';

function Creator() {
  const [status, setStatus] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const users_enabled = '/users/enabled/true';
  const enterprises = '/empresas-instituciones/';
  const user_agent = '/representantes';
  const { data: users } = useQuery('users-enabled', () => getRequestEnabled(users_enabled));
  const { data: company } = useQuery('companies', () => getRequestEnabled(enterprises));
  const response = useMutation((formdata: IFormInput) => postRequest(user_agent, formdata));

  const onSubmit: SubmitHandler<IFormInput> = async (formdata) => {
    response.mutateAsync(formdata);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='1em'>
          <Container>
            <StyledLabel>Nro de Carnet del representante</StyledLabel>
            <IdentityNumberInput register={register} errors={errors} required info={info.ci} />
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel>Tomo del representante</StyledLabel>
            <IntegerInput
              label='tome'
              register={register}
              errors={errors}
              required
              info={info.tome}
            />
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel>Folio del representante</StyledLabel>
            <IntegerInput
              label='folio'
              register={register}
              errors={errors}
              required
              info={info.folio}
            />
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel>Nombre y apellidos de representante</StyledLabel>
            <SuggestedWords message={info.name}>
              <TextInput
                label='name'
                register={register}
                errors={errors}
                required
                info={info.name}
              />
            </SuggestedWords>
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel>Teléfono del representante</StyledLabel>
            <TelInput label='phone' register={register} errors={errors} required info={info.tel} />
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel>Nombre y apellidos de quien lo nombra</StyledLabel>
            <TextInput
              label='namer'
              register={register}
              errors={errors}
              required
              info={info.tutor}
            />
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel>Cargo del que lo nombra</StyledLabel>

            <TextInput
              label='namerCharge'
              register={register}
              errors={errors}
              required
              info={info.occupancy}
            />
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel>Adjunte el documento del nombramiento</StyledLabel>

            <SuggestedWords message={info.file}>
              <Input
                list='representantes'
                {...register('nominationTemplate', { required: true })}
                {...file_type}
              />
            </SuggestedWords>
            <ErrorWarning label='nominationTemplate' errors={errors} />
          </Container>
        </HStack>

        <HStack p='1em'>
          <Container>
            <StyledLabel>Seleccione empresa o institución</StyledLabel>
            <SelectList list={company?.result} label='eiId' register={register} required />
            {errors.eiId && <span style={{ color: '#c40550' }}>campo requerido</span>}
          </Container>
        </HStack>

        <HStack p='1em'>
          <Container>
            <StyledLabel>Selecciona usuario al que se vincula</StyledLabel>
            <SelectList list={users?.result} label='userId' register={register} required />
            {errors.userId && <span style={{ color: '#c40550' }}>campo requerido</span>}
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
