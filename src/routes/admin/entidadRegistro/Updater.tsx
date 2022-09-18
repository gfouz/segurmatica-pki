import * as React from 'react';
import axios from 'axios';
import SuggestedList from './Tooltip';
import StatusHandler from '../common/StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import SubmitButton from '../common/SubmitButton';

import { putRequestById, IFormInput, getRequestAll } from '../common/constants';
import { HStack, Input, Container, Switch, FormLabel } from '@chakra-ui/react';
import { IDS, emailtips, tooltip, number_type, text_type } from '../common/cardStore';
import SelectList from './Select';

function Update(props: { url: string }) {
  const [id, setId] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [list, setList] = React.useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const url = '/municipios/enabled/true';
  const { data } = useQuery('all-enabled-rolls', () => getRequestAll(url));

  const response = useMutation((data: IFormInput) => putRequestById(data, props.url, id), {
    retry: 2,
  });
  const message = response?.data?.message;

  React.useEffect(() => {
    message && setStatus(message);
  }, [message]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    response.mutateAsync(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>Escriba el Id de la Entidad de Registro.</strong>
            </label>
            <SuggestedList datalist={IDS} listname='ids' message={tooltip.provincia}>
              <Input
                color='#ffffff'
                list='ids'
                onChange={(evt) => setId(evt.target.value)}
                {...number_type}
              />
            </SuggestedList>
          </Container>
        </HStack>
        <HStack>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>
                Escriba el nombre de la Entidad de registro
              </strong>
            </label>
            <SuggestedList datalist={emailtips} listname='name' message={tooltip.provincia}>
              <Input
                color='#ffffff'
                list='name'
                {...register('name', { required: true })}
                {...text_type}
              />
            </SuggestedList>
            {errors.name && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack>
          <Container>
            <label htmlFor='address'>
              <strong className='byid-input-label'>
                Escriba la dirección de la entidad de registro
              </strong>
            </label>
            <SuggestedList datalist={IDS} listname='address' message={tooltip.provincia}>
              <Input
                color='#ffffff'
                list='address'
                {...register('address', { required: true })}
                {...text_type}
              />
            </SuggestedList>
            {errors.address && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>
                Seleccione el municipio de la entidad de registro
              </strong>
            </label>

            <SelectList list={data?.result} label='municipioId' register={register} required />

            {errors.municipioId && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack>
          <HStack m='2em 0'>
            <FormLabel htmlFor='enabled' m='0 0 0 2em' color='#ab8ffe'>
              Deshabilitar o habilitar
            </FormLabel>
            <Switch {...register('enabled')} id='enabled' size='sm' colorScheme='red' />
          </HStack>
        </HStack>
        <SubmitButton buttonstate={response?.isLoading} />
        {status && <StatusHandler message={status} />}
      </form>
    </>
  );
}

export default Update;
