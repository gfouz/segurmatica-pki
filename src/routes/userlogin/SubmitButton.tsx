import * as React from 'react';
import styled from 'styled-components';
import { Spinner, Badge } from '@chakra-ui/react';

interface ButtonProps {
  buttonstate: boolean;
}

function SubmitButton(props: ButtonProps) {
  const { buttonstate } = props;
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(buttonstate);
  }, [buttonstate]);
  return (
    <ButtonContainer>
      <StyledButton>
        {loading ? (
          <div>
            <Spinner size='sm' />
            <Badge>Loading...</Badge>
          </div>
        ) : (
          <span>Enviar</span>
        )}
      </StyledButton>
    </ButtonContainer>
  );
}

export default SubmitButton;

const ButtonContainer = styled.div`
  button:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`;
const StyledButton = styled.button`
  padding: 0.5em 1.3em;
  color: #23023f;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  outline: none;
  margin: 2em;
  background-color: #ab8ffe;
`;
