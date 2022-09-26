import * as React from 'react';
import { getRequestAll, getByParams, getServerMessage } from './constants';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { HStack, Container, Heading, Select, Spinner } from '@chakra-ui/react';
import StatusHandler from './StatusHandler';
import ObjectIterator from './ObjectIterator';

function GetByName(props: { path: string; allnames: string; queryKey: string }) {
  const { path, allnames, queryKey } = props;
  const [status, setStatus] = React.useState('');
  const [params, setParams] = React.useState('');
  const { data: all } = useQuery('all-names', () => getRequestAll(allnames));
  const { data, isLoading, isError, refetch } = useQuery(queryKey, () => getByParams(path, params));
  const response = data?.result;
  const names = all?.result;
  const message = data?.response?.data?.message || data?.message;

  React.useEffect(() => {
    getServerMessage(message, setStatus);
  }, [message]);

  const handleSelect = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setParams(evt?.target?.value);
  };
  React.useEffect(() => {
    refetch();
  }, [params]);
  return (
    <>
      <HStack p='1em'>
        <Container>
          <label htmlFor='association'>
            <Heading size='md' m='0.5em 0' color='#009966'>
              Seleccione asociado:
            </Heading>
          </label>
          <Select
            placeholder='Select option'
            size='xm'
            color='#000000'
            onChange={(evt) => handleSelect(evt)}
          >
            {Array.isArray(names) &&
              names.map(
                (
                  item: { id?: any; email?: any; name?: any },
                  key: React.Key | null | undefined,
                ) => {
                  return (
                    <option key={key} value={item.name}>
                      {(item.email && item.email) || (item.name && item.name)}
                    </option>
                  );
                },
              )}
          </Select>
          <StyledGetter>
            {isError && <div>An error ocurred...</div>}
            {isLoading && (
              <div>
                <Spinner size='sm' color='white' />
                <Heading color='white'>Loading...</Heading>
              </div>
            )}
            <ObjectIterator data={response} />
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
