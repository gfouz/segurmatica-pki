import * as React from 'react';
import StatusHandler from '../common/StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { HStack, Input, Container, Badge, VStack, Heading } from '@chakra-ui/react';
import { tip } from './constants';
import SuggestedWords from '../common/SuggestedWords';
import SubmitButton from '../common/SubmitButton';
import TextInput from '../common/TextInput';
import SelectList from './Select';
import { getRequestAll, postRequest, IFormInput } from '../common/constants';

function Creator(props: { url: string }) {
  const { url } = props;
  const [status, setStatus] = React.useState('');
  const path = '/provincias';
  const { data } = useQuery('council', () => getRequestAll(path));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const response = useMutation((formdata: IFormInput) => postRequest(url, formdata));

  const onSubmit: SubmitHandler<IFormInput> = async (formdata) => {
    response.mutateAsync(formdata);
  };
  const message = response?.data?.message;

  React.useEffect(() => {
    message && setStatus(message);
  }, [message]);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='input-label'>Nombre de Municipio</strong>
            </label>
          
              <TextInput label='name' register={register} errors={errors} required />
      
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <VStack align='left'>
              <Heading size='sm' m='2em 0 0.5em 0'>
                Provincia a que pertenece
              </Heading>
              <SelectList list={data?.result} label='provinciaId' register={register} required />
              {errors.provinciaId && <span style={{ color: 'red' }}>Field is required</span>}
            </VStack>
          </Container>
        </HStack>
        <SubmitButton buttonstate={response?.isLoading} />
        {status && <StatusHandler message={status} />}
      </form>
    </>
  );
}

export default Creator;
