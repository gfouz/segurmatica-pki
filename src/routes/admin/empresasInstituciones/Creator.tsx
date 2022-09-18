import * as React from 'react';
import StatusHandler from '../common/StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { HStack, Input, Container } from '@chakra-ui/react';
import { empresas, tip } from './constants';
import { getRequestEnabled, postRequest, text_type, IFormInput } from '../common/constants';
import SuggestedWords from './SuggestedWords';
import SubmitButton from '../common/SubmitButton';
import SelectList from './Select';

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
  const { data: org } = useQuery('users-act', () => getRequestEnabled(organismos));
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
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>Nombre de empresa o instit..</strong>
            </label>
            <SuggestedWords datalist={empresas} listname='empresas' message={tip.name}>
              <Input list='provincias' {...register('name', { required: true })} {...text_type} />
            </SuggestedWords>
            {errors.name && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong>seleccione organismo</strong>
            </label>
            <SelectList list={org?.result} label='organismoId' register={register} required />
            {errors.erId && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong>seleccione municipio</strong>
            </label>
            <SelectList list={mun?.result} label='municipioId' register={register} required />
            {errors.erId && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <SubmitButton buttonstate={response?.isLoading} />
        {status && <StatusHandler message={status} />}
      </form>
    </>
  );
}

export default Creator;
