import styled, { css } from "styled-components";

export interface HeaderProps {
  color?: string;
  bg?: string;
  top?: string;
  left?: string;
  mixed?: boolean;
  dark?: boolean;
  margin?: string;
  padding?: string;
  column?: boolean;
}

export const StyledHeader = styled.div`
  width: 100%;
  background-color: ${(props: HeaderProps) => props.bg};
  margin: ${(props: HeaderProps) => props.margin};
  padding: ${(props: HeaderProps) => props.padding || "1em 0"};
  .nav {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    &__list {
       padding: 1em 0;
    }
    &__item {
       display: flex;
       padding: 0.5em;
    }
    &__item:hover {
      color: violet;
    }
  .nav__icon {
    position: relative;
    top: 2px;
    margin: 0 1.8em 0 0;
  }
  .nav__link {
      color:#999999;
      font-weight: bolder;
      font-size: 0.8em;
      text-transform: uppercase;
    }
  .nav__link--bolder {
      color: #DC143C;
      
    }  
  }

  .hidden {
    display: none;
  }
  .visible {
    font-family: inherit;
  }
  ${(props: HeaderProps) =>
    props.mixed &&
    css`
      background-image: linear-gradient(#808080, #000000);
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}

  ${(props: HeaderProps) =>
    props.dark &&
    css`
      background-color: #666666;
      .nav__item {
        color: #ffffff;
      }
    `}

  ${(props: HeaderProps) =>
    props.column &&
    css`
      .nav { 
       height: 100%;
       flex-direction: column;
       justify-content: space-evenly;
       align-items: flex-start;
     }
    `}  
`;
