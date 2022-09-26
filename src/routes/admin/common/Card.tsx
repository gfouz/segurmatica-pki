import * as React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import Button from './Button';
import { state, switcher } from '../common/store';
import { useSnapshot } from 'valtio';

interface ILayout {
  btncolor?: string;
  headercolor?: string;
  headerbg?: string;
  footercolor?: string;
  footerbg?: string;
  name: string;
  children?: React.ReactNode;
}

export default function Card(props: ILayout) {
  const snap = useSnapshot(state);
  const snap2 = useSnapshot(switcher);
  const { opt } = snap;
  const { st, reverse, setFalse } = snap2;

  return (
    <StyledCard {...props}>
      <header>
        <h2 className='header__title'>Admin...{props.name}</h2>
        <Button st={st} reverse={reverse} />
      </header>
      <Sidebar />
      <main onClick={setFalse}>{props.children}</main>
      <footer>{opt}</footer>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  box-shadow: 1px 1px 10px #222222;
  background-color: #ffffff;
  margin: 2em 0;
  position: relative;
  display: grid;
  min-width: 320px;
  max-width: 700px;
  min-height: 400px;
  grid-template-areas:
    'header header'
    'main  main'
    'footer  footer';
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 1fr;

  header {
    grid-area: header;
    line-height: 60px;
    text-align: center;
    color: #fff4a3;
    background-color: #444444;
  }
  .header__title {
    text-transform: uppercase;
  }
  main {
    grid-area: main;
  }
  .option {
    font-size: 2em;
    font-weight: bolder;
    color: red;
  }

  footer {
    grid-area: footer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    text-transform: uppercase;
    color: #999999;
  }
`;
