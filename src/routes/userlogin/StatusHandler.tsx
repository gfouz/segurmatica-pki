import * as React from 'react';
import styled from 'styled-components';

interface IComponentProps {
  message: string;
}

function StatusHandler({ message }: IComponentProps) {

  const [status, setStatus] = React.useState('');
  React.useEffect(() => {
    setStatus(message);
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
