import * as React from 'react';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';
import store from '../common/store';
import { state } from '../common/store';
import { useForm, SubmitHandler } from 'react-hook-form';
import StatusHandler from '../common/StatusHandler';
import { useMutation, useQuery } from 'react-query';
import { HStack, Input, Container, Switch } from '@chakra-ui/react';
import { getRequestEnabled, putRequestById, file_type } from './constants';
import { IFormInput } from './constants';
import { tip } from './constants';
import SuggestedWords from '../common/SuggestedWords';
import SubmitButton from '../common/SubmitButton';
import SelectList from './Select';
import IntegerInput from './IntegerInput';
import TextInput from './TextInput';
import TelInput from './TelInput';
import IdentityNumberInput from './IdentityNumberInput';

function Updater() {
  const snap = useSnapshot(store);
  const { stack } = snap;
  const snap2 = useSnapshot(state);
  const [status, setStatus] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const users_enabled = '/users/enabled/true';
  const enterprises = '/empresas-instituciones/';
  const user_agent = 'representantes';
  const { data: users } = useQuery('users-enabled', () => getRequestEnabled(users_enabled));
  const { data: company } = useQuery('companies', () => getRequestEnabled(enterprises));

  const response = useMutation((formdata: IFormInput) =>
    putRequestById(formdata, user_agent, stack.id),
  );

  const message = response?.data?.message;

  React.useEffect(() => {
    message && setStatus(message);
    message === 'updated' && snap2.setOption('mostrar');
  }, [message]);

  const onSubmit: SubmitHandler<IFormInput> = async (formdata) => {
    response.mutateAsync(formdata);
    console.log(formdata);
  };

  return (
    <>
      <StyledUpdater>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HStack p='1em'>
            <Container>
              <HStack>
                <label htmlFor='title'>
                  <p className='form-title'>Actualizar representante:</p>
                </label>
              </HStack>
              <StyledLabel>Nro de Carnet del representante</StyledLabel>

              <IdentityNumberInput
                required
                info={tip.ci}
                errors={errors}
                register={register}
                defaultValue={stack.ci}
              />
            </Container>
          </HStack>
          <HStack p='1em'>
            <Container>
              <StyledLabel>Tomo del representante</StyledLabel>

              <IntegerInput
                info={tip.tome}
                required
                label='tome'
                errors={errors}
                register={register}
                defaultValue={stack.tome}
              />
            </Container>
          </HStack>
          <HStack p='1em'>
            <Container>
              <StyledLabel>Folio del representante</StyledLabel>

              <IntegerInput
                info={tip.folio}
                required
                label='folio'
                register={register}
                errors={errors}
                defaultValue={stack.folio}
              />
            </Container>
          </HStack>
          <HStack p='1em'>
            <Container>
              <StyledLabel>Nombre y apellidos de representante</StyledLabel>

              <TextInput
                label='name'
                register={register}
                errors={errors}
                required
                defaultValue={stack.name}
              />
            </Container>
          </HStack>
          <HStack p='1em'>
            <Container>
              <StyledLabel>Teléfono del representante</StyledLabel>

              <TelInput
                label='phone'
                register={register}
                errors={errors}
                required
                defaultValue={stack.phone}
              />
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
                defaultValue={stack.namer}
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
                defaultValue={stack.namerCharger}
              />
            </Container>
          </HStack>
          <HStack p='1em'>
            <Container>
              <StyledLabel>Adjunte el documento del nombramiento</StyledLabel>

              <SuggestedWords message={tip.file}>
                <Input list='representantes' {...register('nominationTemplate')} {...file_type} />
              </SuggestedWords>
              {errors.nominationTemplate && <span style={{ color: 'red' }}>Field is required</span>}
            </Container>
          </HStack>

          <HStack p='1em'>
            <Container>
              <StyledLabel>Seleccione empresa o institución</StyledLabel>
              <SelectList list={company?.result} label='eiId' register={register} required />
              {errors.eiId && <span style={{ color: 'red' }}>Field is required</span>}
            </Container>
          </HStack>

          <HStack p='1em'>
            <Container>
              <StyledLabel>Seleccione usuario al que se vincula</StyledLabel>
              <SelectList list={users?.result} label='userId' register={register} required />
              {errors.userId && <span style={{ color: 'red' }}>Field is required</span>}
            </Container>
          </HStack>
          <HStack p='1em'>
            <StyledLabel>Deshabilitar o habilitar</StyledLabel>
            <Switch
              size='sm'
              colorScheme='red'
              {...register('enabled')}
              defaultChecked={stack.enabled}
            />
          </HStack>
          <SubmitButton buttonstate={response?.isLoading} />
          {status && <StatusHandler message={status} />}
        </form>
      </StyledUpdater>
    </>
  );
}

export default Updater;

const StyledUpdater = styled.div`
  .form-title {
    color: #009966;
    margin: 2em 0;
    font-weight: bolder;
  }
`;
const StyledLabel = styled.h4`
  color: #888888;
  font-weight: bolder;
`;
