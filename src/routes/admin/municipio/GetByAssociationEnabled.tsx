import * as React from 'react';
import styled from 'styled-components';
import StatusHandler from '../common/StatusHandler';
import ArrayIterator from '../common/ArrayIterator';
import { useQuery } from 'react-query';
import { getRequestAll, IFormInput } from '../common/constants';
import { useForm, SubmitHandler } from 'react-hook-form';
import { HStack, Container } from '@chakra-ui/react';

function GetByAssociationEnabled() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const url = 'municipios/provincia/enabled/true';
  const { data } = useQuery('munByProvEnabled', () => getRequestAll(url));

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    //setId(data.provinciaId);
  };

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='1em'>
          <Container>
            <StyledLabel>Municipios por provincias habilitadas</StyledLabel>
            {status && <StatusHandler message={status} />}
          </Container>
        </HStack>
      </form>
      <ArrayIterator data={data?.result} />
    </StyledContainer>
  );
}

export default GetByAssociationEnabled;

const StyledLabel = styled.div`
  color: #444444;
  white-space: nowrap;
  font-size: 1.1em;
  font-weight: bolder;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
