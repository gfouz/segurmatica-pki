import * as React from 'react';
import { IFormInput } from './constants';
import styled from 'styled-components';

interface IData {
  data: IFormInput;
}
function ObjectIterator({ data }: IData) {
  const item = Object.assign({}, data);

  return (
    <>
      <StyledIterator>
        <div className='list-container'>
          <ul className='list'>
            <li className='list__item'>{item?.name && item.name}</li>
            <li className='list__item'>{item?.email && item.email}</li>
            <li className='list__item'>
              {item?.enabled === true ? 'habilitado' : 'deshabilitado'}
            </li>
          </ul>
        </div>
      </StyledIterator>
    </>
  );
}

export default ObjectIterator;

const StyledIterator = styled.div`
  .list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .list {
    padding: 0;
    margin: 0;
    border-radius: 10px;
    width: 200px;
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
