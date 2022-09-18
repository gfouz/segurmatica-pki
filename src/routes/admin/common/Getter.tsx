import React, { useState } from 'react';
import StatusHandler from '../common/StatusHandler';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { getRequestAll, getServerMessage } from './constants';
import ArrayIterator from './ArrayIterator';

import { Spinner, Heading } from '@chakra-ui/react';

//const payload = localStorage.getItem("jwt")

export default function Getter(props: { url: string; queryKey: string }) {
  const [status, setStatus] = useState('');
  const { url, queryKey } = props;
  const { data, isLoading, isError } = useQuery(queryKey, () => getRequestAll(url));
  const message = data?.response?.data?.message || data?.message;

  React.useEffect(() => {
    getServerMessage(message, setStatus);
  }, [message]);

  return (
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
  );
}

const StyledGetter = styled.div`
  width: 100%;
`;
