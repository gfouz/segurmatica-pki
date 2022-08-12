import * as React from 'react';
import styled from 'styled-components';

function Dashboard(props) {
  return (
    <StyledDashboard>
      <header>
        <h1 className='dashboard__title'>Panel General de Administración.</h1>
      </header>
      <main>{props.children}</main>
      <footer>Segurmática</footer>
    </StyledDashboard>
  );
}

export default Dashboard;

const StyledDashboard = styled.div`
  border: 1px solid black;
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
    background-color: #ab8ffe;
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
`;
