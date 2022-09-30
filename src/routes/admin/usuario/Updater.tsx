import * as React from 'react';
import store from '../common/store';
import { state } from '../common/store';
import { useSnapshot } from 'valtio';
import SelectList from './Select';
import SuggestedList from '../common/Tooltip';
import StatusHandler from './StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { putRequestById, IFormInput, getRequestAll } from '../common/constants';
import { Container, Switch, FormLabel, Heading } from '@chakra-ui/react';
import { HStack, Input, Flex } from '@chakra-ui/react';
import { email_type, password_type } from '../common/cardStore';
import { info } from '../common/constants';
import SubmitButton from '../common/SubmitButton';
import PasswordInput from '../common/PasswordInput';
import StyledLabel from '../common/StyledLabel';
import EmailInput from './EmailInput';
import ErrorWarnig from '../common/ErrorWarning';


function Update(props: { url: string; queryKey: string }) {
  const snap = useSnapshot(store);
  const snap2 = useSnapshot(state);
  const { stack } = snap;
  const { setOption } = snap2;
  const [id, setId] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState<string | undefined>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const path = '/rols/enabled/true';
  const { data } = useQuery('enabled-rolls', () => getRequestAll(path));
  const response = useMutation((data: IFormInput) => putRequestById(data, props.url, stack.id), {
    retry: 2,
  });
  const message = response?.data?.message;

  React.useEffect(() => {
    message && setStatus(message);
    message === 'updated' && setOption('mostrar');
    setName(stack.name);
  }, [message, stack]);

  const onSubmit: SubmitHandler<IFormInput> = async (formdata) => {
    response.mutateAsync(formdata);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction='column' p='0 1em'>
          <StyledLabel color='#009966' m='1em 0'>
            Actualizar usuario
          </StyledLabel>
          <StyledLabel capit>Correo electrónico.</StyledLabel>
          <EmailInput 
            info={info.email}
            register={register} 
            errors={errors} 
            />
          <StyledLabel capit>Escriba una contraseña.</StyledLabel>
          <PasswordInput label='password' register={register} errors={errors} required />
          <StyledLabel color='#009966' capit>
            Seleccione un rol
          </StyledLabel>
          <SelectList list={data?.result} label='rolId' register={register} required />
          <ErrorWarnig label='rolId' errors={errors} info={info.select}/>
          <HStack m='2em 0'>
            <StyledLabel capit color='#444444'>
              Deshabilitar o habilitar.
            </StyledLabel>
            <Switch
              defaultChecked={stack.enabled}
              {...register('enabled')}
              id='enabled'
              size='sm'
              colorScheme='red'
            />
          </HStack>

          <SubmitButton buttonstate={response?.isLoading} />
          {status && <StatusHandler message={status} />}
        </Flex>
      </form>
    </>
  );
}

export default Update;
