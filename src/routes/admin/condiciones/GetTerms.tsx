import React, { useState, useEffect } from 'react';
import StatusHandler from '../common/StatusHandler';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { getRequestAll } from './constants';
import { Spinner, Heading } from '@chakra-ui/react';
import StyledLabel from '../common/StyledLabel';

//const payload = localStorage.getItem("jwt")

export default function Getter(props: { url: string; queryKey: string }) {
  const { url, queryKey } = props;
  const [token, setToken] = useState(() => localStorage.getItem('jwt'));
  const [status, setStatus] = useState('');
  const { data, isLoading, isError } = useQuery(queryKey, () => getRequestAll(url));

  const message = data?.message;

  React.useEffect(() => {
    message && setStatus(message);
    message === 'updated';
  }, [message]);

  return (
    <StyledGetter>
      {isError && <div>An error ocurred...</div>}
      {isLoading && (
        <div>
          <Spinner size='sm' color='red' />
          <Heading color='#444444'>Loading...</Heading>
        </div>
      )}
      <StyledTextContainer>
        {status && <StatusHandler message={status} />}

        <StyledLabel color='#009966'>Terminos y condiciones.</StyledLabel>

        <StyledParagraph>{data?.data}</StyledParagraph>
      </StyledTextContainer>
    </StyledGetter>
  );
}

const StyledGetter = styled.div`
  width: 100%;
`;
const StyledTextContainer = styled.div`
  padding: 1em 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledParagraph = styled.p`
  color: #666666;
  text-align: left;
`;
