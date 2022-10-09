import * as React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CaretLeft from '../common/icons/CaretLeft';
import { HStack, Button } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getRequestAll } from '../common/constants';
import StyledLabel from '../common/StyledLabel';
import StatusHandler from '../common/StatusHandler';
import { axiosApi } from '../common/constants';

function TermsAndPolicies() {
  const url = 'condiciones';
  const [status, setStatus] = React.useState('');
  const { data, isLoading, isError } = useQuery('full-policy', () => getRequestAll(url));
  const token = localStorage.getItem('jwt');

  React.useEffect(() => {
    if (token) {
      axiosApi.defaults.headers.common['jwt'] = token;
    }
  }, []);

  const message = data?.message;
  React.useEffect(() => {
    message && setStatus(message);
  }, [message]);

  let navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  return (
    <>
      <StyledPolicy>
        <article className='policy'>
          <div className='policy__button'>
            <Button onClick={handleClick}>
              <CaretLeft fontSize='10px' />
              <span className='policy__button-text'>regresar</span>
            </Button>
          </div>
          <StyledLabel m='2em 0'> Términos y condiciones de Segurmática </StyledLabel>
          <p>{data?.data}</p>
        </article>
        {status && <StatusHandler message={status} />}
      </StyledPolicy>
    </>
  );
}

export default TermsAndPolicies;

const StyledPolicy = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .policy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em;
    max-width: 600px;
    background-color: #f1f1f1;
  }
  .policy__title {
    color: #888888;
    font-size: 20px;
  }
  .policy__button {
    text-transform: uppercase;
    font-weight: bolder;
    color: #0660b1;
    align-self: flex-start;
  }
  .policy__button-text {
    margin: 0 0.5em;
  }
  p {
    color: #444444;
    font-family: calibri;
  }
`;
