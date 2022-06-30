import * as React from "react";
import Form from "./Form";
import styled from 'styled-components'
import Layout from "../layout/Layout";


export default function Login() {

  return (
    <>
      <Layout>
        <StyledLogin>
          <Form />
        </StyledLogin>
      </Layout>
    </>
  );
}

const StyledLogin = styled.div`
 
  background-color: #F8F8F8;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  @media (min-width: 800px){
    padding: 0.5em 0;
  }
`;