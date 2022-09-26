import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { HStack, Input, Container } from '@chakra-ui/react';
import { tip } from './constants';
import { text_type } from '../common/cardStore';
import { getRequestEnabled, postRequest, empresas } from './constants';
import { IFormInput, IProps } from '../common/constants';
import SelectList from '../entidadRegistro/Select';
import TextInput from '../common/TextInput';
import TelInput from '../common/TelInput';
import SubmitButton from '../common/SubmitButton';
import StatusHandler from '../common/StatusHandler';

function Creator(props: { url: string }) {
  const { url } = props;

  const [status, setStatus] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const url1 = '/users/enabled/true';
  const url2 = '/entidades-registro/enabled/true';
  const { data: entidad } = useQuery('entidad-actived', () => getRequestEnabled(url2));
  const { data: users } = useQuery('users-act', () => getRequestEnabled(url1));
  const response = useMutation((formdata: IFormInput) => postRequest(url, formdata));
  const onSubmit: SubmitHandler<IFormInput> = async (formdata) => {
    response.mutateAsync(formdata);
    console.log(formdata);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='1em'>
          <Container>
            <label htmlFor='name'>
              <strong className='byid-input-label'>
                Escriba el nombre del funcionario de registro
              </strong>
            </label>
            
              <TextInput label='name' register={register} errors={errors} required />
          
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>Teléfono del funcionario de registro</strong>
            </label>
            
              <TelInput label='phone' register={register} errors={errors} required />
      
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>
                Seleccione entidad de registro a la que pertenece
              </strong>
            </label>
            <SelectList list={entidad?.result} label='erId' register={register} required />
            {errors.erId && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong>Seleccione usuario al que se vincula</strong>
            </label>
            <SelectList list={users?.result} label='userId' register={register} required />
            {errors.userId && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <SubmitButton buttonstate={response?.isLoading} />
      </form>
      {status && <StatusHandler message={status} />}
    </>
  );
}

export default Creator;
