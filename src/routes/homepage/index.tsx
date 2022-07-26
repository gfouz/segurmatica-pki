import * as React from "react";
import styled from "styled-components";
import HorizonLine from "../../components/HorizonLine";
import Layout from "../layout/Layout";

export default function Homepage() {
  return (
    <Layout>
      <StyledHome>
        <section className="homepage">
          <article>
            <p className="article__title">PKI</p>
            <HorizonLine color="#1799ff" />
          </article>
          <img
             src="./images/homepage.png" 
             alt="man" 
             className="homepage__image"
          />
          <h2 className="article__subtitle">MÁS DE 25 AÑOS DE EXPERIENCIA.</h2>
        </section>
      </StyledHome>
    </Layout>
  );
}

const StyledHome = styled.div`
  width: 100%;

  section {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .homepage__logo {
      width: 120px;
      height: auto;
      position: absolute;
      top: -20px;
      left: 0;
    }
  .homepage__image {
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
    }
      .article__title {
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
  .article__subtitle {
    fontsize: 20px;
    margin: 2em 0 2em 0;
    color: #000000;
    whitespace: nowrap;
    fontfamily: calibri;
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


//npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11