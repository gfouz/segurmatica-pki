import * as React from 'react';
import { getRequestAll, getByParams } from '../common/constants';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import StyledLabel from '../common/StyledLabel';
import StatusHandler from '../common/StatusHandler';
import ArrayIterator from '../common/ArrayIterator';
import { HStack, Container, Heading, Select, Spinner } from '@chakra-ui/react';


function GetByParams() {

  const path = 'users/rol';
  const attached = 'rols';
  const [status, setStatus] = React.useState('');
  const [params, setParams] = React.useState('');
  const { data: related_to } = useQuery('rols-all', () => getRequestAll(attached));
  const { 
    data, 
    isLoading, 
    isError, 
    refetch 
  } = useQuery('users-by-rols', () => getByParams(path, params));
  const response = data?.result;
  const related = related_to?.result;
  const message = data?.response?.data?.message || data?.message;

  React.useEffect(() => {
    setStatus(message);
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
            <StyledLabel m='2em 0' color='#009966'>
              Buscar usuario por rols:
            </StyledLabel>
          </label>
          <Select
            placeholder='Select option'
            size='xm'
            color='#000000'
            onChange={(evt) => handleSelect(evt)}
          >
            {related?.map(
              (item: { id?: any; email?: any; name?: any }, key: React.Key | null | undefined) => {
                return (
                  <option key={key} value={item.id}>
                    {item.email || item.name}
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
            <ArrayIterator data={data?.result} />
            {status && <StatusHandler message={status} />}
          </StyledGetter>
        </Container>
      </HStack>
    </>
  );
}

export default GetByParams;

const StyledGetter = styled.div`
  width: 100%;
`;
