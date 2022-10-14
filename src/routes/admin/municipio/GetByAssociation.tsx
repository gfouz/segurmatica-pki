import * as React from 'react';
import styled from 'styled-components';
import Select from './Select';
import StatusHandler from '../common/StatusHandler';
import ArrayIterator from '../common/ArrayIterator';
import { useQuery } from 'react-query';
import { getRequestAll, getRequestById } from './constants';
import { useForm, SubmitHandler } from 'react-hook-form';
import SubmitButton from '../common/SubmitButton';
import { HStack, Container, Heading } from '@chakra-ui/react';
import { IFormInput } from '../common/constants';
import StyledLabel from '../common/StyledLabel';


function GetByAssociation() {
  const [id, setId] = React.useState('');
  const [status, setStatus] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const url = 'provincias';
  const url2 = 'municipios/provincia'; //municipios por provincias
  const { data: list } = useQuery('provincias', () => getRequestAll(url));
  const { data, isLoading, refetch } = useQuery('municipiosby', () => getRequestById(url2, id));

  const onSubmit: SubmitHandler<IFormInput> = async (formdata) => {
    setId(data?.provinciaId);
  };
  
  const message = data?.message;

  React.useEffect(() => {
    refetch();
  }, [id]);

  React.useEffect(() => {
    message && setStatus(message);
  }, [message]);
  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <HStack p='1em'>
            <Container>
                <StyledLabel upper m='1em 0'>
                  Municipios por Provincias
                </StyledLabel>
              <Select
                list={list?.result}
                label='provinciaId'
                required
                onChange={(evt) => setId(evt.target.value)}
              />
              {errors.provinciaId && <span style={{ color: 'red' }}>Field is required</span>}
            </Container>
          </HStack>
          <HStack>
            <SubmitButton buttonstate={isLoading} />
          </HStack>
        </Container>
      </form>
      <Container>
        <ArrayIterator data={data?.result} />
        {status && <StatusHandler message={status} />}
      </Container>
    </StyledContainer>
  );
}

export default GetByAssociation;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
