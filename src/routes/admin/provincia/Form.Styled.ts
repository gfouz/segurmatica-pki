import styled from "styled-components";


export const StyledForm = styled.div`
  background-color: #222222;
  color: #444444;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 4em 1em;
  margin: 2em 0;
  border-radius: 20px;

  .input__label {
    font-size: 16px;
    white-space: nowrap;
    font-weight: bolder;
  }
  .input__label--red {
    color: #ffffff;
  }
  .checkbox__label {
    font-size: 16px;
    color:#0660b1;
  }
  .btn-text {
    font-size: 10px;
    color: #000000;
  }
`;
