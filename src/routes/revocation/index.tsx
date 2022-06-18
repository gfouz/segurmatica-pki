import * as React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import Form from './Form';


function Revocation() {
  return (
    <Layout>
       <StyledResgister>
        <section className="login">
          <div className="login__divider bg-grey">
            <img className="login__image" src="./images/contact.png" />
          </div>
          <div className="login__divider">
            <Form/>
          </div>
        </section>
      </StyledResgister>
    </Layout>
  );
}

export default Revocation;

const StyledResgister = styled.div`
  width: 100%;
  background-color: #f8f8f8;
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
    align-items: center;
    justify-content: center;
  }
  .login__logo {
    width: 300px;
    border-radius: 10px;
    background-color:#00000099;
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
 .bg-grey  {
  background-color: #3a3839;
 }
`;

//git clone https://github.com/gfouz/pki-frontend.git
