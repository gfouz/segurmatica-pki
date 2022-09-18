import * as React from 'react';
import StatusHandler from '../common/StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { HStack, Input, Container } from '@chakra-ui/react';
import { provinces, tooltip } from '../common/cardStore';
import { text_type } from '../common/constants';
import SuggestedList from '../common/Tooltip';
import { postRequest, getRequestAll, IFormInput } from '../common/constants';
import SubmitButton from '../common/SubmitButton';
import SelectList from './Select';

function Creator(props: { path: string }) {
  const { path } = props;
  const [status, setStatus] = React.useState('');
  const [list, setList] = React.useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const url = '/municipios/enabled/true';
  const { data } = useQuery('all-enabled-rolls', () => getRequestAll(url));

  const response = useMutation((user: IFormInput) => postRequest(path, user));
  const message = response?.data?.message;
  const error = response?.data?.message;

  React.useEffect(() => {
    setStatus(message);
  }, [message]);

  const onSubmit: SubmitHandler<IFormInput> = async (user) => {
    response?.mutateAsync(user);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>
                Escriba el nombre de la Entidad de registro
              </strong>
            </label>
            <SuggestedList
              datalist={provinces}
              listname='entidades-registro'
              message={tooltip.provincia}
            >
              <Input
                color='#ffffff'
                list='entidades-registro'
                {...register('name', { required: true })}
                {...text_type}
              />
            </SuggestedList>
            {errors.name && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>
                Escriba la dirección de la entidad de registro
              </strong>
            </label>
            <SuggestedList
              datalist={provinces}
              listname='entidades-registro'
              message={tooltip.provincia}
            >
              <Input
                color='#ffffff'
                list='entidades-registro'
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
        <SubmitButton buttonstate={response?.isLoading} />
        {status && <StatusHandler message={status} />}
      </form>
    </>
  );
}

export default Creator;
