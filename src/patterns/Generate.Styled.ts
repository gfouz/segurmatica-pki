import styled from 'styled-components';

export const StyledGenerate = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  margin: 2em 0;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 800px) {
    padding: 0.5em 0;
  }
  .label__name {
    color: #777777;
    white-space: nowrap;
  }
`;
