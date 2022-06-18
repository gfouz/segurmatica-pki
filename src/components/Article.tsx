import * as React from 'react'
import styled from "styled-components";

interface Props {
  width?: string;
  align?: string;
  justify?: string;
  direction?: string;
  margin?: string;
  padding?: string;
  textWidth?: string;
  imageWidth?: string;
  children?: React.ReactNode;
}

const Article = (props: Props) => {
  return (
    <>
        <StyledArticle {...props}>{props.children}</StyledArticle>
    </>
  );
};

export default Article;

const StyledArticle = styled.article`
  position: relative;
  display: flex;
  align-items: ${(props: Props)=> props.align || "center"};
  justify-content: ${(props: Props)=> props.justify || "flex-start"};
  flex-direction: ${(props: Props)=> props.direction || "column"};
  max-width: ${(props: Props) => props.width || "400px"};
  margin: ${(props: Props) => props.margin || "0"};
  padding: ${(props: Props) => props.padding || "0"};
  @media (max-width: 820px){
    max-width:100%;
  }
  .article__text {
    width: ${(props: Props) => props.textWidth || "50%"};
  }
  .article__image {
    width: ${(props: Props) => props.imageWidth || "50%"};
  }
`;
