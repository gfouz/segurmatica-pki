import * as React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import { theme } from "../constants";
import ProvinceAdmin from "./provincia/index";
import ToastVariant from "../../components/Toast";

function Admin() {
  return (
      <StyledAdmin>
        <ToastVariant linear={theme.green} color="#ffffff" />
        <section className="login">
          <div className="login__divider">
            <ProvinceAdmin />
          </div>
        </section>
      </StyledAdmin>
  );
}

export default Admin;

const StyledAdmin = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f1f1f1;
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  .bg-grey {
    background-color: #3a3839;
  }
`;

//git clone https://github.com/gfouz/pki-frontend.git
