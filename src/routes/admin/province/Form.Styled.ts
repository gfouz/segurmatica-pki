import styled from "styled-components";


export const StyledForm = styled.div`
  background-color: #ffffff;
  color: #444444;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 4em 1em;
  margin: 2em 0;
  border-radius: 20px;

  .input__label {
    color: #ffffff;
    font-size: 16px;
    white-space: nowrap;
    font-weight: bolder;
  }
  .input__label--red {
    color: #FF9999;
  }
  .checkbox__label {
    font-size: 16px;
    color:#0660b1;
  }
`;
