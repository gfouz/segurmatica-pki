import React, { useState, useEffect } from 'react';
import StatusHandler from './StatusHandler';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { getRequestEnabled } from './constants';
import ArrayIterator from './ArrayIterator';

import { Button, Spinner, Heading } from '@chakra-ui/react';

export default function GetEnable(props: { url: string; queryKey: string }) {
  const { url, queryKey } = props;
  const [status, setStatus] = useState(null);

  const { data, isError, isLoading, isSuccess, refetch } = useQuery(queryKey, () =>
    getRequestEnabled(url),
  );
  const result = data?.result;
  const message = data?.response?.data?.message || data?.message;
  React.useEffect(() => {
    setStatus(message);
  }, [message]);

  return (
    <StyledGetter>
      {status === 'Network Error' && (
        <div className='refetch-button'>
          <Button
            size='sm'
            onClick={() => {
              refetch();
            }}
          >
            Intentar
          </Button>
        </div>
      )}
      {isError && (
        <div>
          <Spinner size='sm' /> Error ocurred...
        </div>
      )}
      {isLoading && (
        <div>
          <Spinner size='sm' color='white' />
          <Heading color='#ffffff'>Loading</Heading>
        </div>
      )}
      {isSuccess && <ArrayIterator data={data?.result} />}
      <div className='status'>{status && <StatusHandler message={status} />}</div>
    </StyledGetter>
  );
}

const StyledGetter = styled.div`
  width: 100%;
  .status {
    text-align: center;
  }
`;
