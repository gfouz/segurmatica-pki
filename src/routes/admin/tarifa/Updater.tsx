import * as React from 'react';
import StatusHandler from '../common/StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { HStack, Input } from '@chakra-ui/react';
import { Heading, Flex, Switch } from '@chakra-ui/react';
import { provinces, tooltip } from '../common/cardStore';
import SuggestedList from '../common/Tooltip';
import SelectList from './Select';
import { text_type, range_type } from '../common/constants';
import { postRequest, getRequestAll, IFormInput } from '../common/constants';
import SubmitButton from '../common/SubmitButton';
import NumericInput from '../common/NumericInput';
import AlphaNumericInput from '../common/AlphaNumericInput';


function Update(props: { url: string }) {
  const { url } = props;

  const [status, setStatus] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const path = '/finalidades';
  const { data } = useQuery('all-finalidades', () => getRequestAll(path));
  const response = useMutation((data: IFormInput) => postRequest(url, data));
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    response.mutateAsync(data);
    console.log(data);
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
          <HStack>
            
              <AlphaNumericInput label='range' register={register} errors={errors} required />
      
          </HStack>
          <Heading size='sm' p='1em'>
            Seleccione finalidad
          </Heading>
          <Flex p='1em' direction ='column'>
            <SelectList list={data?.result} label='finalidadId' register={register} required />
            {errors.finalidadId && <span style={{ color: 'red' }}>Field is required</span>}
          </Flex>
          <HStack p='1em'>
            <Heading size='sm' m='0 1em'>
              Deshabilitar o habilitar
            </Heading>
            <Switch {...register('enabled')} id='enabled' size='sm' colorScheme='red' />
          </HStack>
          <SubmitButton buttonstate={response?.isLoading} />
          {status && <StatusHandler message={status} />}
        </Flex>
      </form>
    </>
  );
}

export default Update;
