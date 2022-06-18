import * as React from "react";
import styled from "styled-components";
import HorizonLine from "../../components/HorizonLine";
import Layout from "../layout/Layout";
import { subtitleProps, logoProps } from "./constant";
import { Heading } from "@chakra-ui/react";

export default function Homepage() {
  return (
    <Layout>
      <StyledHome>
        <section>
          <article>
            <img
              style={{ ...logoProps }}
              src="./images/segurmatica.jpg"
              alt="Segurmática"
            />
            <p className="article__pki">PKI</p>
            <HorizonLine color="#1799ff" />
            <Heading {...subtitleProps}>
              25 años de experincia en seguridad.
            </Heading>
            <Heading {...subtitleProps}>Servicio de llave pública.</Heading>
            <Heading {...subtitleProps}>{new Date().getFullYear()}</Heading>
          </article>
          <img src="./images/robot.jpg" alt="robot" />
        </section>
      </StyledHome>
    </Layout>
  );
}

const StyledHome = styled.div`
  width: 100%;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      height: auto;
    }
    article {
      position: relative;
      top: 3em;
      width: 100%;
      text-align: center;
      img {
        margin: 0 2em;
        opacity: 0;
        animation: logo;
        animation-delay: 0.2s;
        animation-duration: 1s;
        animation-direction: normal;
        animation-fill-mode: forwards;
      }
      .article__pki {
        opacity: 0;
        color: #0099ff;
        font-size: 3.2em;
        font-weight: bolder;
        font-family: calibri;
        animation: pki;
        animation-delay: 0.2s;
        animation-duration: 1.5s;
        animation-direction: normal;
        animation-fill-mode: forwards;
      }
    }
  }

  @keyframes logo {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes pki {
    from {
      opacity: 0;
      transform: rotateY(180deg);
    }
    to {
      opacity: 1;
      transform: rotateY(0);
    }
  }
`;
