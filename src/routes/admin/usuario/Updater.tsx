import * as React from 'react';
import store from '../common/store';
import { state } from '../common/store';
import { useSnapshot } from 'valtio';
import SelectList from './Select';
import SuggestedList from './Tooltip';
import StatusHandler from './StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { putRequestById, IFormInput, getRequestAll } from '../common/constants';
import { Container, Switch, FormLabel, Heading } from '@chakra-ui/react';
import { HStack, Input } from '@chakra-ui/react';
import { email_type, password_type } from '../common/cardStore';
import { IDS, emailtips, tooltip } from '../common/cardStore';
import SubmitButton from '../common/SubmitButton';


function Update(props: { url: string; queryKey: string; }) {
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
  const response = useMutation((data: IFormInput) => putRequestById(data, props.url, stack.id), { retry: 2 });
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
        <HStack>
          <Heading size='sm' color='#009966' m='1em'>
            {stack.email}
          </Heading>
        </HStack>
        <HStack>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>correo electrónico</strong>
            </label>
            <SuggestedList datalist={emailtips} listname='email' message={tooltip.provincia}>
              <Input
                defaultValue={stack.email}
                list='email'
                {...register('email', { required: true })}
                {...email_type}
              />
            </SuggestedList>
            {errors.email && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack>
          <Container>
            <label htmlFor='password'>
              <strong className='byid-input-label'>Escriba una contraseña</strong>
            </label>
            <SuggestedList datalist={IDS} listname='password' message={tooltip.provincia}>
              <Input
                list='password'
                {...register('password', { required: true })}
                {...password_type}
              />
            </SuggestedList>
            {errors.password && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>Seleccione un rol</strong>
            </label>

            <SelectList list={data?.result} label='rolid' register={register} required />

            {errors.rolid && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack>
          <HStack m='2em 0'>
            <FormLabel htmlFor='enabled' m='0 0 0 2em' color='#ab8ffe'>
              Deshabilitar o habilitar
            </FormLabel>
            <Switch
              defaultChecked={stack.enabled}
              {...register('enabled')}
              id='enabled'
              size='sm'
              colorScheme='red'
            />
          </HStack>
        </HStack>
        <SubmitButton buttonstate={response?.isLoading} />
        {status && <StatusHandler message={status} />}
      </form>
    </>
  );
}

export default Update;
