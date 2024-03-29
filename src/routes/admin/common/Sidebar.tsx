import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { useSnapshot } from 'valtio';
import { switcher } from './store';
import { IOptions } from './constants';

export default function Sidebar(props: IOptions) {
  
  const snap = useSnapshot(switcher);
  const { st } = snap;

  return (
    <StyledSidebar>
      <div className={st ? 'opened' : 'closed'}>
        <Navbar column options={props.options}/>
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
    width: 60%;
    z-index: 10;
  }
  .closed {
    display: none;
    transform: translateX(-40%);
  }
`;
