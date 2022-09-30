import * as React from 'react';
import styled from 'styled-components';
import StatusHandler from '../common/StatusHandler';
import { Heading, Textarea, Text } from '@chakra-ui/react';
import { Container, HStack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useQuery, useMutation } from 'react-query';
import { postRequest, getRequestAll } from './constants';
import SubmitButton from '../common/SubmitButton';
import StyledLabel from '../common/StyledLabel';
import { ITerms } from './constants';

export default function GetById(props: { url: string; queryKey: string }) {
  const { url, queryKey } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITerms>();

  let [status, setStatus] = React.useState('');
  const { data, isLoading, isError } = useQuery(queryKey, () => getRequestAll(url));
  const [text, setText] = React.useState('');
  const [value, setValue] = React.useState('');

  const loading = isLoading;
  const result = data?.result;
  const message = data?.message;

  React.useEffect(() => {
    setStatus(message);
  }, [message]);

  React.useEffect(() => {
    setText(data?.data);
  });

  const response = useMutation((formdata: ITerms) => postRequest(url, formdata));

  const onSubmit: SubmitHandler<ITerms> = async (formdata) => {
    //response.mutateAsync(formdata);
    console.log(formdata);
  };

  return (
    <>
      <StyledGetter>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HStack p='1em'>
            <Container>
              <StyledLabel color='#009966' m='1em 0' center>
                Editar condiciones.
              </StyledLabel>

              <Textarea defaultValue={text} placeholder='Terminos y condiciones' minWidth='320px' />
              <SubmitButton buttonstate={response?.isLoading} />
            </Container>
          </HStack>
          {errors.condiciones && <span style={{ color: 'red' }}>Field is required</span>}
        </form>
        <HStack>{status && <StatusHandler message={status} />}</HStack>
      </StyledGetter>
    </>
  );
}

const StyledGetter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
