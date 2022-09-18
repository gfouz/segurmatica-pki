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
];

interface IStatusProps {
  message?: string;
}

function StatusHandler({ message }: IStatusProps | any) {
  const [status, setStatus] = React.useState('');
  React.useEffect(() => {
    messages.map((item) => {
      switch (message) {
        case item:
          setStatus(item);
          break;
        default: {
            setStatus(message)
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
  text-transform: uppercase;
  text-align: center;
  p {
    font-size: 0.7em;
  }
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
