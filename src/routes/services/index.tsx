import * as React from "react";
import styled from "styled-components";
import Layout from '../layout/Layout';
import { titleProps } from './constants';
import { Heading } from '@chakra-ui/react';
import Glider from '../../components/slider/Slider'

function Services() {
  return (
    <Layout>
      <StyledService>
        <Heading style={{ ...titleProps }}>Servicios de Segurmática:</Heading>
        <Glider />
      </StyledService>
    </Layout>
  );
}
export default Services;

const StyledService = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
background-image: url('./images/services.jpg');
background-position: top;
background-size: cover;
background-repeat: no-repeat;
}
`;
//git push -u origin main