import * as React from 'react';
import styled from 'styled-components';
import StatusHandler from '../common/StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { HStack, Input } from '@chakra-ui/react';
import { Heading, Flex } from '@chakra-ui/react';
import { info } from './constants';
import SelectList from './Select';
import { text_type } from './constants';
import { postRequest, getRequestAll, IFormInput } from '../common/constants';
import SubmitButton from '../common/SubmitButton';
import NumericInput from '../common/NumericInput';
import StyledLabel from '../common/StyledLabel';
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
          <StyledLabel m='0 0 2em 0' capit color='#009966' center>
            Añadir tarifa
          </StyledLabel>
          <StyledLabel capit m='1em 0 0 0'>
            Tiempo
          </StyledLabel>
      
            <NumericInput label='time' register={register} errors={errors} required  info={info.numeric}/>
        
          <StyledLabel capit m='1em 0 0 0'>
            Precio de Tarifa
          </StyledLabel>
          
            <NumericInput label='price' register={register} errors={errors} required info={info.numeric} />
        
          <StyledLabel capit m='1em 0 0 0'>
            Seleccione rango
          </StyledLabel>
          
            <AlphaNumericInput label='range' register={register} errors={errors} required info={info.alpha}/>
        
          <StyledLabel color='#009966' capit m='1em 0 0 0'>
            Seleccione finalidad
          </StyledLabel>
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

