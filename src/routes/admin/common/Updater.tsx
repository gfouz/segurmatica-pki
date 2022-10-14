import * as React from 'react';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';
import store from './store';
import { state } from './store';
import { useForm, SubmitHandler } from 'react-hook-form';
import StatusHandler from './StatusHandler';
import { useMutation } from 'react-query';
import { putRequestById, text_type, IFormInput } from './constants';
import { HStack, Input, Heading } from '@chakra-ui/react';
import { Container, Switch, FormLabel } from '@chakra-ui/react';
import { provinces, tooltip } from './cardStore';
import TextInput from './TextInput';
import SubmitButton from '../common/SubmitButton';

interface IProps {
  url: string;
  msg?: string;
}

function Update(props: IProps) {
  const info = 'se requiere nombres compuestos sin números';
  const snap = useSnapshot(store);
  const snap2 = useSnapshot(state);

  const { stack } = snap;
  const { url, msg } = props;
  const [status, setStatus] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const response = useMutation((data: any) => putRequestById(data, url, stack.id));

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    response.mutateAsync(data);
  };
  const message = response?.data?.message || response?.data;

  React.useEffect(() => {
    message && setStatus(message);
    message === 'updated' && snap2.setOption('mostrar');
  }, [message]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='2em'>
          <Heading size='md' color='#009966'>
            {stack.name}
          </Heading>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel>Actualice nombre</StyledLabel>
            <TextInput
              info={info}
              required
              label='name'
              errors={errors}
              register={register}
              defaultValue={stack.name}
            />
          </Container>
        </HStack>
        <HStack>
          <FormLabel htmlFor='enabled' m='0 0 0 2em' color='#333333'>
            Deshabilitar o habilitar
          </FormLabel>
          <Switch
            {...register('enabled')}
            id='enabled'
            size='sm'
            colorScheme='red'
            defaultChecked={Boolean(stack.enabled)}
          />
        </HStack>

        <SubmitButton buttonstate={response?.isLoading} />

        {status && <StatusHandler message={status} />}
      </form>
    </>
  );
}

export default Update;

const StyledLabel = styled.h4`
  color: #888888;
  font-weight: bolder;
`;
