import * as React from 'react';
import StatusHandler from './StatusHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import { HStack, Input, Container } from '@chakra-ui/react';
import { provinces, tooltip, text_type } from './cardStore';
import SuggestedList from './Tooltip';
import { postRequest, IFormInput } from './constants';
import SubmitButton from '../common/SubmitButton';

function Creator(props: { url: string; }) {
  const { url } = props;
  const [status, setStatus] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const response = useMutation((data: IFormInput) => postRequest(url, data));
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    response.mutateAsync(data);
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
              <strong className='byid-input-label'>Escriba nombre</strong>
            </label>
            <SuggestedList datalist={provinces} listname='provincias' message={tooltip.provincia}>
              <Input list='provincias' {...register('name', { required: true })} {...text_type} />
            </SuggestedList>
            {errors.name && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <SubmitButton buttonstate={response?.isLoading} />
        {status && <StatusHandler message={status} />}
      </form>
    </>
  );
}

export default Creator;
