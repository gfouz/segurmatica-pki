import * as React from 'react';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';
import store from '../common/store';
import { state } from '../common/store';
import StatusHandler from '../common/StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { HStack, Input } from '@chakra-ui/react';
import { Flex, Switch } from '@chakra-ui/react';
import SelectList from './Select';
import { info } from '../common/constants';
import { putRequestById, getRequestAll, IFormInput } from '../common/constants';
import SubmitButton from '../common/SubmitButton';
import NumericInput from '../common/NumericInput';
import AlphaNumericInput from '../common/AlphaNumericInput';
import StyledLabel from '../common/StyledLabel';

function Update(props: { url: string }) {
  const { url } = props;
  const snap = useSnapshot(store);
  const snap2 = useSnapshot(state);
  const { stack } = snap;

  const [status, setStatus] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const path = '/finalidades';
  const { data } = useQuery('all-finalidades', () => getRequestAll(path));
  const response = useMutation((formdata: any) => putRequestById(formdata, url, stack.id));

  const onSubmit: SubmitHandler<IFormInput> = async (formdata) => {
    response.mutateAsync(formdata);
  };

  const message = response?.data?.message;

  React.useEffect(() => {
    message && setStatus(message);
    message === 'updated' && snap2.setOption('mostrar');
  }, [message]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex p='1em' direction='column'>
          <StyledLabel m='0 0 2em 0' capit color='#009966' center>
            Actualizar tarifa
          </StyledLabel>
          <StyledLabel capit m='1em 0 0 0'>
            Tiempo
          </StyledLabel>
          <NumericInput
            label='time'
            register={register}
            errors={errors}
            required
            info={info.numeric}
            defaultValue={stack.time}
          />
          <StyledLabel capit m='1em 0 0 0'>
            Precio de Tarifa
          </StyledLabel>
          <NumericInput
            label='price'
            register={register}
            errors={errors}
            required
            info={info.numeric}
            defaultValue={stack?.price}
          />
          <StyledLabel capit m='1em 0 0 0'>
            Estimar rango
          </StyledLabel>
          <AlphaNumericInput
            label='range'
            register={register}
            errors={errors}
            required
            info={info.alpha}
            defaultValue={stack?.range}
          />
          <StyledLabel m='2em 0 0 0' capit color='#009966'>
            Seleccione finalidad
          </StyledLabel>
          <Flex p='1em' direction='column'>
            <SelectList 
             list={data?.result} 
             label='finalidadId' 
             register={register} 
             required 
             />
            {errors.finalidadId && <span style={{ color: 'red' }}>Field is required</span>}
          </Flex>
          <HStack>
            <StyledLabel m='0 1em'>Deshabilitar o habilitar</StyledLabel>
            <Switch 
            {...register('enabled')} 
            id='enabled' 
            size='sm' 
            colorScheme='red'
            defaultChecked={stack?.enabled} 
            />
          </HStack>
          <SubmitButton buttonstate={response?.isLoading} />
          {status && <StatusHandler message={status} />}
        </Flex>
      </form>
    </>
  );
}

export default Update;
