import * as React from 'react';
import styled from 'styled-components';
import StatusHandler from '../common/StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { HStack, Input, Container } from '@chakra-ui/react';
import { provinces, tooltip } from '../common/cardStore';
import { text_type } from '../common/constants';
import { info } from '../common/constants';
import { postRequest, getRequestAll, IFormInput } from '../common/constants';
import SubmitButton from '../common/SubmitButton';
import TextInput from '../common/TextInput';
import AlphaNumericInput from '../common/AlphaNumericInput';
import SelectList from './Select';

function Creator(props: { path: string }) {
  const { path } = props;
  const [status, setStatus] = React.useState('');
  const [list, setList] = React.useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const url = '/municipios/enabled/true';
  const { data } = useQuery('all-enabled-rolls', () => getRequestAll(url));

  const response = useMutation((user: IFormInput) => postRequest(path, user));
  const message = response?.data?.message;
  const error = response?.data?.message;

  React.useEffect(() => {
    setStatus(message);
  }, [message]);

  const onSubmit: SubmitHandler<IFormInput> = async (user) => {
    response?.mutateAsync(user);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='1em'>
          <Container>
            <StyledLabel>Nombre de la Entidad de registro</StyledLabel>

            <TextInput required label='name' errors={errors} info={info.name} register={register} />
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel>Dirección de la entidad de registro</StyledLabel>
            <AlphaNumericInput
              info={info.alpha}
              required
              label='address'
              errors={errors}
              register={register}
            />
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <StyledLabel>Seleccione el municipio de la entidad de registro</StyledLabel>

            <SelectList list={data?.result} label='municipioId' register={register} required />
            {errors.municipioId && <span style={{ color: 'red' }}>Field is required</span>}
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
  color: ${(props) => props.color || '#888888'};
  font-weight: bolder;
`;
