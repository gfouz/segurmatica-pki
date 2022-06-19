import * as React from "react";
import { useLocation, Link } from "react-router-dom";
import { StyledHeader, HeaderProps } from "./Header.styles";
import Home from "../../icons/Home";
import SpyGlass from "../../icons/SpyGlass";
import Telegram from "../../icons/Telegram";
import Whatsapp from "../../icons/Whatsapp";
import Envelope from "../../icons/Envelope";
import GitAlt from "../../icons/GitAlt";
import FileSearch from "../../icons/FileSearch";
import Services from "../../icons/Services";
import Download from "../../icons/Download";
import FormText from "../../icons/FormText";

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
      icon: <Services />,
    },
    {
      path: "/contacto",
      icon: <Envelope />,
    },
    {
      path: "/consultas",
      icon: <FileSearch />,
    },
    {
      path: "/descargas",
      icon: <Download />,
    },
    {
      path: "/generacion",
      icon: <FormText />,
    },
    {
      path: "/renovacion",
      icon: <FormText />,
    },
    {
      path: "/revocacion",
      icon: <FormText />,
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
                <div
                  className={
                    item.path === pathname
                      ? "nav__link nav__link--bolder"
                      : "nav__link"
                  }
                >
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
