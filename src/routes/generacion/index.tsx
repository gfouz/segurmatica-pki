import * as React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import Register from "../../patterns/Register";

function Generation() {
  return (
    <Layout>
      <StyledResgister>
        <section className="login">
          <div className="login__divider">
            <img className="login__image" src="./images/contact.png" />
          </div>
          <div className="login__divider">
            <Register />
          </div>
        </section>
      </StyledResgister>
    </Layout>
  );
}
export default Generation;
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
    justify-content: center;
    align-items: center;
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
`;



/*
EMAIL: 
comercial@segurmatica.cu    
soporte@segurmatica.cu

TELÉFONOS: 
Comercial: 78703536 ext 133 y 134
Soporte Técnico: +78703536 ext 135 y 136

DIRECCIÓN: 
Calle Zanja No.651 esquina a Soledad, municipio Centro Habana, Cuba

*/