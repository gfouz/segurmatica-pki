import * as React from 'react';
import styled from 'styled-components';
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
import StyledLabel from '../common/StyledLabel';

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
          <StyledLabel m='0 0 2em 0' capit color='#009966' center>
            Actualizar tarifa
          </StyledLabel>
          <StyledLabel m='1em 0 0 0' capit>
            Tiempo
          </StyledLabel>
      
            <NumericInput label='time' register={register} errors={errors} required />

          <StyledLabel m='1em 0 0 0' capit>
            Precio de Tarifa
          </StyledLabel>
    
            <NumericInput label='price' register={register} errors={errors} required />
  
          <StyledLabel m='1em 0 0 0' capit>
            Seleccione rango
          </StyledLabel>
      
            <AlphaNumericInput label='range' register={register} errors={errors} required />
        
          <StyledLabel m='2em 0 0 0' capit color='#009966'>
            Seleccione finalidad
          </StyledLabel>
          <Flex p='1em' direction='column'>
            <SelectList list={data?.result} label='finalidadId' register={register} required />
            {errors.finalidadId && <span style={{ color: 'red' }}>Field is required</span>}
          </Flex>
          <HStack>
            <StyledLabel m='0 1em'>
              Deshabilitar o habilitar
            </StyledLabel>
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

