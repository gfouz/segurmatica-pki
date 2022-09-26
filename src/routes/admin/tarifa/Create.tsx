import * as React from 'react';
import StatusHandler from '../common/StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { HStack, Input } from '@chakra-ui/react';
import { Heading, Flex } from '@chakra-ui/react';
import { tip } from './constants';
import SelectList from './Select';
import { text_type } from './constants';
import { postRequest, getRequestAll, IFormInput } from '../common/constants';
import SubmitButton from '../common/SubmitButton';
import NumericInput from '../common/NumericInput';
import AlphaNumericInput from '../common/AlphaNumericInput';


function Creator(props: { url: string }) {
  const { url } = props;

  const [status, setStatus] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const path = '/finalidades';
  const { data } = useQuery('all-finalidades', () => getRequestAll(path));
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
        <Flex p='1em' direction='column'>
          <Heading size='sm' p='1em'>
            Tiempo
          </Heading>
          <HStack>
            
              <NumericInput label='time' register={register} errors={errors} required />
            
          </HStack>
          <Heading size='sm' p='1em'>
            Precio de Tarifa
          </Heading>
          <HStack>
        
              <NumericInput label='price' register={register} errors={errors} required />
        
          </HStack>
          <Heading size='sm' p='1em'>
            Seleccione rango
          </Heading>
          <HStack p='1em'>
            
              <AlphaNumericInput label='range' register={register} errors={errors} required />
        
          </HStack>
          <Heading size='sm' p='1em'>
            Seleccione finalidad
          </Heading>
          <HStack p='1em'>
            <SelectList list={data?.result} label='finalidadId' register={register} required />
            {errors.finalidadId && <span style={{ color: 'red' }}>Field is required</span>}
          </HStack>
          <SubmitButton buttonstate={response?.isLoading} />
          {status && <StatusHandler message={status} />}
        </Flex>
      </form>
    </>
  );
}

export default Creator;
