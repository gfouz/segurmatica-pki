import * as React from 'react';
import styled from 'styled-components';

const messages = [
  'ok',
  'updated',
  'enabled',
  'associated',
  'created',
  'accepted',
  'not-authorized',
  'bad-request',
  'Bad Request',
  'Forbidden',
  'Network Error',
  'unprocessable',
  'Unprocessable-data',
  'not-found',
  'Not Found',
  'found by id',
  'gotten-by-id',
  'Unprocessable Entity',
  'Request failed with status code 401',
  'Request failed with status code 422'
];

interface IStatusProps {
  message?: string;
}

function StatusHandler({ message }: IStatusProps) {
  const [status, setStatus] = React.useState('');
  React.useEffect(() => {
    messages.map((item) => {
      switch (message) {
        case item:
          setStatus(item);
          break;
        default: {
          message;
          break;
        }
      }
    });
  }, [message]);

  return (
    <>
      <StatusStyled>
        <p className={message}>{status}</p>
      </StatusStyled>
    </>
  );
}

export default StatusHandler;

const StatusStyled = styled.div`

  margin: 2em;
  font-weight: bolder;
  font-size: 0.7em;
  text-transform: uppercase;

  .ok {
    color: green;
  }
  .accepted {
    color: green;
  }
  .not-authorized {
    color: red;
  }
  .not-found {
    color: #222222;
  }
  .bad-request {
    color: red;
  }
  .unprocessable {
    color: yellow;
  }
  .enabled {
    color: #446344;
  }
`;
