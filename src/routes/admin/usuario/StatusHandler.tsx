import * as React from 'react';
import styled from 'styled-components';

interface IStatusProps {
  message?: string;
}

function StatusHandler({ message }: IStatusProps) {
  const [status, setStatus] = React.useState('');
  
React.useEffect(()=>{
   switch (message) {
    case 'ok': //200
      setStatus('todo bien!');
      break;
    case 'accepted': //201
      setStatus('aceptado!');
      break;
    case 'not-authorized': //401
      setStatus('no autorizado!');
      break;
    case 'bad-request': //400
      setStatus('solicitud errada!');
      break;  
    case 'Forbidden': //403
      setStatus('email o password incorrecto!');
      break;  
    case 'Network Error': //403
      setStatus('error de red!');
      break;  
    case 'unprocessable': //422
      setStatus('datos no procesados!');
      break;  
    case 'Unprocessable-data': //422
      setStatus('datos incompletos!');
      break;
    case 'not-found': //404
      setStatus('datos no encontrados!');
    
    
  }
 },[message]);
  
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

`;
