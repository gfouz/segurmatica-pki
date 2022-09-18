import * as React from 'react';
import { useSnapshot } from 'valtio';
import store from './store';
import { state } from './store';
import SuggestedList from './Tooltip';
import { useForm, SubmitHandler } from 'react-hook-form';
import StatusHandler from './StatusHandler';
import { useMutation } from 'react-query';
import { putRequestById, text_type, IFormInput } from './constants';
import { HStack, Input, Heading } from '@chakra-ui/react';
import { Container, Switch, FormLabel } from '@chakra-ui/react';
import { provinces, tooltip } from './cardStore';
import SubmitButton from '../common/SubmitButton';

interface IProps {
  url: string;
}

function Update(props: IProps) {
  const snap = useSnapshot(store);
  const snap2 = useSnapshot(state);

  const { stack } = snap;
  const { url } = props;
  const [status, setStatus] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const response = useMutation((data: any) => putRequestById(data, url, stack.id));

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    response.mutateAsync(data);
  };
  const message = response?.data?.message;

  React.useEffect(() => {
    message && setStatus(message);
    message === 'updated' && snap2.setOption('mostrar');
  }, [message]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='2em'>
          <Heading size='md' color='#009966'>
            {stack.name}
          </Heading>
        </HStack>
        <HStack p='1em'>
          <Container>
            <label htmlFor='provinces'>
              <strong className='byid-input-label'>Actualice nombre</strong>
            </label>
            <SuggestedList datalist={provinces} listname='provincias' message={tooltip.provincia}>
              <Input
                defaultValue={stack.name}
                list='provincias'
                {...register('name', { required: true })}
                {...text_type}
              />
            </SuggestedList>
            {errors.name && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack>
          <FormLabel htmlFor='enabled' m='0 0 0 2em' color='#333333'>
            Deshabilitar o habilitar
          </FormLabel>
          <Switch
            {...register('enabled')}
            id='enabled'
            size='sm'
            colorScheme='red'
            defaultChecked={stack.enabled}
          />
        </HStack>

        <SubmitButton buttonstate={response?.isLoading} />

        {status && <StatusHandler message={status} />}
      </form>
    </>
  );
}

export default Update;
