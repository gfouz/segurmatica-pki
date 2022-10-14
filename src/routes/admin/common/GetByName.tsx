import * as React from 'react';
import { getRequestAll, getServerMessage } from './constants';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { HStack, Container, Heading, Select, Spinner } from '@chakra-ui/react';
import StatusHandler from './StatusHandler';
import StyledLabel from './StyledLabel';
import ReactSearch from './ReactSearch';

interface IProps {
  allnames: string;
}

function GetByName(props: IProps) {
  const { allnames } = props;
  const [status, setStatus] = React.useState('');

  const { data, isError, isLoading } = useQuery('all-names', () => getRequestAll(allnames));
  const list = data?.result;
  const message = data?.message || data;

  React.useEffect(() => {
    getServerMessage(message, setStatus);
  }, [message]);

  return (
    <>
      <HStack p='1em'>
        <Container>
          <StyledLabel
           m='0.5em 0' 
           color='#009966' 
           upper
           >
            Búsqueda por nombre.
          </StyledLabel>
          <ReactSearch data={list} />
          <StyledGetter>
            {isError && <div>An error ocurred...</div>}
            {isLoading && (
              <div>
                <Spinner size='sm' color='white' />
                <Heading color='white'>Loading...</Heading>
              </div>
            )}

            {status && <StatusHandler message={status} />}
          </StyledGetter>
        </Container>
      </HStack>
    </>
  );
}

export default GetByName;

const StyledGetter = styled.div`
  width: 100%;
`;
