import * as React from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import styled from "styled-components";
import Layout from "../layout/Layout";

export default function Login() {
  const navigate = useNavigate();

  const token = localStorage.getItem("auth");

  React.useEffect(() => {
    setTimeout(() => {
      token && navigate("/");
    }, 1000);
  }, [token]);

  return (
    <>
      <Layout>
        <StyledLogin>
          <Form />
          <h1>{token}</h1>
        </StyledLogin>
      </Layout>
    </>
  );
}

const StyledLogin = styled.div`
  background-color: #f8f8f8;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  @media (min-width: 800px) {
    padding: 0.5em 0;
  }
`;
