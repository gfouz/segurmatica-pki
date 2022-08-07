import React from "react";
import styled from 'styled-components';

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Button = ({ open, setOpen }: IProps) => {
  return (
    <StyledButton open={open} >
     <button onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
     </button> 
    </StyledButton>
  );
};
export default Button;

const StyledButton = styled.div`
  button { 
    position: absolute;
    right: 0;
    top: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1rem;
    height: 1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 10;
    margin: 1em;
    &:focus {
      outline: none;
    }
 }
    div {
      width: 1.5rem;
      height: 0.2rem;
      background: ${({open}) => (open ? "orange" : "white")};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      left: -15px;
      top: 10px;

      transform-origin: 4.2px;

      :first-child {
        transform: ${({open}) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({open}) => (open ? "0" : "1")};
        transform: ${({open}) =>
        open ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({open}) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }



`;
