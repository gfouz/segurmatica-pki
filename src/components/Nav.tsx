import * as React from "react";
import styled, { css } from "styled-components";
import { useLocation, Link } from "react-router-dom";

interface Props {
  color?: string;
  bg?: string;
  top?: string;
  left?: string;
  mixed?: any;
  position?: string;
  height?: string;
  margin?: string;
  padding?: string;
}

function Header(props: Props) {
  const links = ["/contactos", "/consultas", "/servicios", "/"];
  const router = useLocation();
  const { pathname } = router;
  const currentlinks = links.filter((link) => link !== pathname);

  return (
    <>
      <StyledHeader {...props}>
        <div className="links">
          {currentlinks.map((link, index) => (
            <div key={link + index}>
              <Link className="links__item" to={`${link}`}>
                <h4 className="">{link === "/" ? "inicio" : link.slice(1)}</h4>
              </Link>
            </div>
          ))}
        </div>
      </StyledHeader>
    </>
  );
}
export default Header;
const StyledHeader = styled.div`
  --fullheight: ${(props: Props) => props.height};

  width: 100%;
  height: var(--fullheight);
  line-height: var(--fullheight);
  top: ${(props: Props) => props.top || "0"};
  left: ${(props: Props) => props.left || "0"};
  position: ${(props: Props) => props.position};
  background-color: ${(props: Props) => props.bg};
  margin: ${(props: Props) => props.margin || "0"};
  padding: ${(props: Props) => props.padding || "0"};
  .links {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    a {
      color: ${(props: Props) => props.color || "#ffffff"};
      text-decoration: none;
      text-transform: uppercase;
      line-height: var(--fullheight);
      transition: all 0.4s;
    }  
    a:hover {
      color: #50a3c0;
    }
  }
  .hidden {
    display: none;
  }
  .visible {
    font-family: inherit;
  }

  ${(props: Props) =>
    props.mixed &&
    css`
      background-image: linear-gradient(#808080, #000000);
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}
`;
