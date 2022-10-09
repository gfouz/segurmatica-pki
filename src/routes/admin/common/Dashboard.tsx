import * as React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CaretLeft from '../../../icons/CaretLeft';

interface IProps {
  children: React.ReactNode;
}

function Dashboard({ children }: IProps) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  return (
    <StyledDashboard>
      <header>
        <div className='backwards' onClick={handleClick}>
          <CaretLeft fontSize='10px' color='blue' /> <span>REGRESAR</span>
        </div>
      </header>
      <main>{children}</main>
      <footer></footer>
    </StyledDashboard>
  );
}

export default Dashboard;

const StyledDashboard = styled.div`
  border: 1px solid red;
  display: grid;
  width: 100%;
  min-height: 100vh;

  grid-template-areas:
    'header header'
    'main  main'
    'footer  footer';
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 1fr;

  header {
    text-align: center;
    grid-area: header;
    color: #372381;
    font-weight: bolder;
    line-height: 60px;
  }
  main {
    grid-area: main;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  footer {
    grid-area: footer;
    text-align: center;
    line-height: 60px;
    font-weight: bolder;
  }

  .backwards {
    position: fixed;
    top: -1em;
    display: flex;
    text-transform: uppercase;
    font-weight: bolder;
    margin: 1em;
    span {
      position: relative;
      left: 1rem;
      color: #999999;
    }
  }
`;

//#ab8ffe violet
