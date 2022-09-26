import * as React from 'react';
import styled from 'styled-components';
import StatusHandler from '../common/StatusHandler';
import ArrayIterator from '../common/ArrayIterator';
import { useQuery } from 'react-query';
import { getRequestAll } from '../common/constants';
import { HStack, Container } from '@chakra-ui/react';

function GetByAssociationEnabled() {
  const [status, setStatus] = React.useState('');
  const url = 'municipios/provincia/enabled/true';
  const { data } = useQuery('munByProvEnabled', () => getRequestAll(url));
  const message = data?.message;

  React.useEffect(() => {
    message && setStatus(message);
  }, [message]);

  return (
    <>
      <HStack p='1em'>
        <Container>
          <StyledLabel>Municipios por provincias habilitadas</StyledLabel>
        </Container>
      </HStack>
      <ArrayIterator data={data?.result} />
      {status && <StatusHandler message={status} />}
    </>
  );
}

export default GetByAssociationEnabled;

const StyledLabel = styled.div`
  color: #444444;
  white-space: nowrap;
  font-size: 1.1em;
  font-weight: bolder;
`;
