import * as React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import StyledProvince from './Styled.Province';
import CaretLeft from '../../../icons/CaretLeft';
import { theme } from '../../constants';
import ToastVariant from '../../../components/Toast';
import Dashboard from '../common/Dashboard';
import Card from '../common/Card';
import Form from './Form';

function RolAdmin() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  return (
    <>
      <StyledRol>
        <ToastVariant linear={theme.green} color='#ffffff' />
        <Dashboard>
          <div className='btn-backwards' onClick={handleClick}>
            <CaretLeft /> <span>REGRESAR</span>
          </div>
          <Card name='rol'>
            <Form />
          </Card>
        </Dashboard>
      </StyledRol>
    </>
  );
}

export default RolAdmin;

const StyledRol = styled.div`
  width: 100%;
  position: relative;
  background-color: #ffffff;
  .province {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .province__divider {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg-grey {
    background-color: #3a3839;
  }
  .btn-backwards {
    align-self: flex-start;
    display: flex;
    text-transform: uppercase;
    font-weight: bolder;
    color: #0660b1;
    margin: 1em;
    span {
      position: relative;
      top: 0.5rem;
      left: 1rem;
      color: #009fff;
    }
  }
  .btn-backwards__text {
    font-weight: bolder;
    position: relative;
    top: 8px;
    left: 5px;
  }
`;
