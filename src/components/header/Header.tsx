import * as React from "react";
import { useLocation, Link } from "react-router-dom";
import { StyledHeader, HeaderProps } from "./Header.styles";
import Home from "../../icons/Home";
import SpyGlass from "../../icons/SpyGlass";
import Telegram from "../../icons/Telegram";
import Whatsapp from "../../icons/Whatsapp";
import Envelope from "../../icons/Envelope";
import GitAlt from "../../icons/GitAlt";

function Header(props: HeaderProps) {
  interface IRouterPath {
    path: string;
    icon: React.ReactNode;
  }

  const routes: IRouterPath[] = [
    {
      path: "/",
      icon: <Home />,
    },
    {
      path: "/servicios",
      icon: <Telegram />,
    },
    {
      path: "/contacto",
      icon: <Whatsapp />,
    },
    {
      path: "/consultas",
      icon: <Envelope />,
    },
    {
      path: "/descargas",
      icon: <GitAlt />,
    },
    {
      path: "/generacion",
      icon: <SpyGlass />,
    },
    {
      path: "/renovacion",
      icon: <GitAlt />,
    },
    {
      path: "/revocacion",
      icon: <GitAlt />,
    },
  ];

  const router = useLocation();
  const { pathname } = router;
 
  return (
    <>
      <StyledHeader {...props}>
        <div className="nav">
          {routes.map((item) => (
            <Link to={`${item.path}`} key={React.useId()}>
              <div className="nav__item">
                <div className="nav__icon">{item.icon}</div>
                <div className={item.path === pathname ? "nav__link nav__link--bolder" : "nav__link"}>
                  {item.path === "/" ? "inicio" : item.path.slice(1)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </StyledHeader>
    </>
  );
}
export default Header;

