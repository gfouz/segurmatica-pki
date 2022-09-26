import * as React from 'react';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';
import store from './store';
import { state } from './store';
import { IFormInput } from './constants';

interface IProps {
  data: IFormInput[];
}

function ArrayIterator({ data }: IProps) {
  const snap = useSnapshot(store);
  const snap2 = useSnapshot(state);
  //const toggle = useCardStore((state) => state.setOption);

  const handleClick = (item: IFormInput) => {
    snap.setStack(item);
    snap2.setOption('actualizar');
    //toggle('actualizar');
  };

  return (
    <>
      <StyledIterator>
        {Array.isArray(data) ? (
          data?.map((item, idx) => (
            <ul className='list' key={idx} onClick={() => handleClick(item)}>
              <li className={item?.enabled ? 'list__item' : 'disabled'}>
                <p> {item?.name && `nombre: ${item?.name}`}</p>
                <p> {item?.ci && `dni: ${item?.ci}`}</p>
                <p> {item?.tome && `tomo: ${item?.tome}`}</p>
                <p> {item?.folio && `folio: ${item?.folio}`}</p>
                <p> {item?.email && `correo: ${item?.email}`} </p>
                <p> {item?.price && `precio: ${item?.price}`}</p>
                <p> {item?.range && `rango: ${item?.range}`}</p>
                <p> {item?.phone && `tel: ${item?.phone}`}</p>
                <p> {item?.enabled === true ? 'Habilitado' : 'Deshabilitado'}</p>
              </li>
            </ul>
          ))
        ) : (
          <p className='default-message'>no data available</p>
        )}
      </StyledIterator>
    </>
  );
}

export default ArrayIterator;

const StyledIterator = styled.div`
  width: 100%;
  margin: 2em 0;
  padding: 0.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .default-message {
    color: #ff0000;
    text-align: center;
    font-weight: bolder;
    text-transform: uppercase;
  }

  .list {
    cursor: pointer;
    width: 320px;
    padding: 1em;
    margin: 0.1em;
    border-radius: 10px;
    background-color: #e7e9eb;
  }
  .list__item {
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 0.7em;

    padding: 0.7em;
    color: #009966;
    text-align: left;
    list-style-type: none;
  }
  .disabled {
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 0.7em;

    padding: 0.7em;
    color: #999999;
    text-align: left;
    list-style-type: none;
  }

  .list:hover {
    animation: jello-horizontal 0.9s both;
  }

  @keyframes jello-horizontal {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.05, 0.9, 1);
    }
    40% {
      transform: scale3d(0.85, 1.05, 1);
    }
    50% {
      transform: scale3d(1.05, 0.9, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;

// className= item.enabled ? 'list__value' : 'list__value--disabled'
