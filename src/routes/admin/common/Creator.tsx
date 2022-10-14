import * as React from 'react';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';
import store from './store';
import { state } from './store';
import StatusHandler from './StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import { HStack, Input, Container } from '@chakra-ui/react';
import { provinces, tooltip, text_type } from './cardStore';
import SuggestedList from './Tooltip';
import { postRequest, IFormInput } from './constants';
import SubmitButton from '../common/SubmitButton';
import TextInput from './TextInput';

function Creator(props: { url: string; msg?: string }) {
  const info = 'se permiten nombres compuestos sin números';
  const { url, msg } = props;
  const [status, setStatus] = React.useState('');
  const snap = useSnapshot(store);
  const snap2 = useSnapshot(state);
  const { stack } = snap;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const response = useMutation((data: IFormInput) => postRequest(url, data));
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    response.mutateAsync(data);
  };
  const message = response?.data?.message || response?.data;

  React.useEffect(() => {
    message && setStatus(message);
    message === 'created' && snap2.setOption('mostrar');
  }, [message]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='1em'>
          <Container>
            <StyledLabel>Nombre</StyledLabel>
            <TextInput label='name' register={register} errors={errors} required info={info} />
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
