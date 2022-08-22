import * as React from 'react';
import styled from 'styled-components';
import { useCardStore } from '../common/cardStore';
import GetEnabled from '../common/GetEnabled';
import GetById from '../common/GetById';
import Getter from '../common/Getter';
import Updater from '../common/Updater';
import Creator from '../common/Creator';

//----FORM COMPONENT TO HANDLE ALL MODELS.----
export default function Form() {
  const option = useCardStore((state) => state.option);

  return (
    <>
      <StyledForm>
        <div>
          {option == 'mostrar' && (
            <>
              <Getter url='provincias' keys='provincias' />
            </>
          )}
        </div>
        {option == 'buscar' && (
          <>
            <GetById
              url='provincias'
              label='Buscar provincia por ID.
                 '
            />
          </>
        )}
        {option == 'habilitados' && (
          <>
            <GetEnabled keys='provincias-enabled' url='provincias/enabled' />
          </>
        )}

        {option == 'crear' && (
          <>
            <Creator url='provincias' labelForName='Añadir nombre de provincia' />
          </>
        )}

        {option == 'actualizar' && (
          <>
            <Updater
              url='provincias'
              labelForId='Id de la provincia'
              labelForName='Escriba nombre de provincia'
            />
          </>
        )}
      </StyledForm>
    </>
  );
}

export const StyledForm = styled.div`
  background-color: #222222;
  color: #ab8ffe;
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
    color: #0660b1;
  }
  .btn-text {
    font-size: 10px;
    color: #000000;
  }
`;
