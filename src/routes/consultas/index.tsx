import * as React from "react";
import styled from 'styled-components';
import Layout from "../layout/Layout";
import Header from '../../components/header/Header'
import ErrorMessage from '../../components/ErrorMessage'
import { Heading } from '@chakra-ui/react'

export default function Request() {

  return (
    <Layout>
      <StyledRequest>
         <div className="container">
         <section>
            <ErrorMessage msg="errror" />
         </section>
        </div>
      </StyledRequest>
    </Layout>
  )
}

const StyledRequest = styled.div`

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid red;
  border-radius: 5px;
  max-width: 500px;
}
}
  
  
`;