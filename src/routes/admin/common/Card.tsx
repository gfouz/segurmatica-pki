import * as React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import Button from './Button';
import Form from '../province/Form';
import { useCardStore, useBooleanStore } from './cardStore';

interface ILayout {
  btncolor?: string;
  headercolor?: string;
  headerbg?: string;
  footercolor?: string;
  footerbg?: string;
  children?: React.ReactNode;
}

export default function Card(props: ILayout) {
  const boolean = useBooleanStore((state) => state.bool);
  const close = useBooleanStore((state) => state.setFalse);
  const setBoolean = useBooleanStore((state) => state.setBoolean);

  const option = useCardStore((state) => state.option);

  return (
    <StyledCard {...props}>
      <header>
        <h2 className='header__title'>Administrar {props.name}</h2>
        <Button open={boolean} setOpen={setBoolean} />
      </header>
      <Sidebar open={boolean} setOpen={setBoolean} />
      <main onClick={close}>{props.children}</main>

      <footer>{option}</footer>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  box-shadow: 1px 1px 10px #222222;
  background-color: #222222;
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
    background-color: #000000;
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
    color: #fff4a3;
    background-color: #000000;
  }
`;
