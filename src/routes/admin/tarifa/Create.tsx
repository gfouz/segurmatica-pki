import * as React from 'react';
import StatusHandler from '../common/StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { HStack, Input } from '@chakra-ui/react';
import { Heading, Flex } from '@chakra-ui/react';
import { provinces, tooltip } from '../common/cardStore';
import SuggestedList from './Tooltip';
import SelectList from './Select';
import { text_type } from './constants';
import { postRequest, getRequestAll, IFormInput } from '../common/constants';
import SubmitButton from '../common/SubmitButton';


function Creator(props: { url: string; }) {
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
            <SuggestedList datalist={provinces} listname='provincias' message={tooltip.provincia}>
              <Input list='provincias' {...register('time', { required: true })} {...text_type} />
            </SuggestedList>
            {errors.name && <span style={{ color: 'red' }}>Field is required</span>}
          </HStack>
          <Heading size='sm' p='1em'>
            Precio de Tarifa
          </Heading>
          <HStack>
            <SuggestedList datalist={provinces} listname='provincias' message={tooltip.provincia}>
              <Input list='provincias' {...register('price', { required: true })} {...text_type} />
            </SuggestedList>
            {errors.name && <span style={{ color: 'red' }}>Field is required</span>}
          </HStack>
          <Heading size='sm' p='1em'>
            Seleccione rango
          </Heading>
          <HStack p='1em'>
            <input {...register('range', { required: true })} type='range' min='100' max='600' />
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
