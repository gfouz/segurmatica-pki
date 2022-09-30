import * as React from 'react';
import { IFormInput } from '../common/constants';
import styled from 'styled-components';

interface IData {
  data: IFormInput;
}
function ObjectIterator({ data }: IData) {

   const isKey = (prop: string) => data?.hasOwnProperty(prop);
   if ( isKey('name') || isKey('email') || isKey('price')) {
   const item = Object.assign({}, data);

    return (
      <>
        <StyledIterator>
          <div className='list-container'>
            <ul className='list'>
              {item.name && <li className='list__item'>{item?.name}</li>}
              {item.ci && <li className='list__item'>DNI: {item?.ci}</li>}
              {item.tome && <li className='list__item'>TOMO: {item?.tome}</li>}
              {item.folio && <li className='list__item'>FOLIO: {item?.folio}</li>}
              {item.email && <li className='list__item'>EMAIL: {item?.email}</li>}
              {item.phone && <li className='list__item'>{`TEL: ${item?.phone}`}</li>}
              {item.price && <li className='list__item'>{`Precio: ${item?.price}`}</li>}
              {item.range && <li className='list__item'>{`Rango: ${item?.range}`}</li>}
              <li className='list__item'>
                {item?.enabled === true ? 'habilitado' : 'deshabilitado'}
              </li>
            </ul>
          </div>
        </StyledIterator>
      </>
    );
  } else {
    return <StyledMessage>No data available</StyledMessage>;
  }
}

export default ObjectIterator;

const StyledIterator = styled.div`
  margin: 2em 0;
  .list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .list {
    padding: 0;
    margin: 0;
    border-radius: 10px;
    min-width: 250px;
    padding: 1em;
    margin: 0.2em;
    background-color: #000000;
    box-shadow: 1px 1px 10px #ab8ffe;
  }
  .list__item {
    color: #f1f1f1;
    text-align: left;
    list-style-type: none;
  }
`;
const StyledMessage = styled.p`
  color: red;
  margin: 1em 0;
  text-align: center;
  font-weight: bolder;
  text-transform: uppercase;
`;
