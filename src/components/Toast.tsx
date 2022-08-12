import React from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IToast {
  bg?: string;
  color?: string;
  linear?: string;
}

//------Overwriting some toastify css classes--------//
//------in order to personalize the component.-------//

export default function ToastVariant(props: IToast) {
  return <StyledToast {...props} />;
}

const StyledToast = styled(ToastContainer)`
  .Toastify__toast--info {
    color: ${(props: IToast) => props.color};
    background: ${(props) => props.bg};
    background-image: ${(props) => props.linear};
  }
  .Toastify__toast--success {
    color: ${(props: IToast) => props.color};
    background: ${(props) => props.bg};
    background-image: ${(props) => props.linear};
  }
  .Toastify__toast--warning {
    color: ${(props: IToast) => props.color};
    background-color: ${(props) => props.bg};
    background-image: ${(props) => props.linear};
  }
  .Toastify__toast--error {
    color: ${(props: IToast) => props.color};
    background-color: ${(props) => props.bg};
    background-image: ${(props) => props.linear};
  }
`;
