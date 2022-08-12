import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { useBooleanStore } from './cardStore';

interface IProps {
  open: boolean;
  children: React.ReactNode;
}

export default function Sidebar(props: IProps) {
  const boolean = useBooleanStore((state) => state.bool);

  return (
    <StyledSidebar>
      <div className={boolean ? 'opened' : 'closed'}>
        <Navbar column />
      </div>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.nav`
  .opened {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #ffffff;
    transition: all 1s;
    transform: translateX(0);
    width: 40%;
    z-index: 10;
  }
  .closed {
    display: none;
    transform: translateX(-40%);
  }
`;
