import * as React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import Form from "./Form";
import { theme } from '../constants';
import ToastVariant  from '../../components/Toast'

function Renovation() {
  return (
    <Layout>
      <StyledResgister>
         <ToastVariant linear={theme.green} color = "#ffffff"/>
        <section className="login">
          <div className="login__divider">
            <Form />
          </div>
        </section>
      </StyledResgister>
    </Layout>
  );
}

export default Renovation;

const StyledResgister = styled.div`
  width: 100%;
  background-color: #CCCCCC;
  .login {
    position: relative;
    display: flex;
    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .login__divider {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login__logo {
    width: 300px;
    border-radius: 10px;
    background-color: #00000099;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #ffffff;
    font-size: 1.7em;
    font-weight: bolder;
    font-family: calibri;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  .login__image {
    max-width: 100%;
    height: auto;
  }
`;
