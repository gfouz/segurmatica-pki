import * as React from "react";
import Services from "./icons/Services";
import Download from "./icons/Download";
import FormText from "./icons/FormText";
import { useCardStore, useBooleanStore } from './cardStore';
import { StyledNavbar, HeaderProps, IOptions } from "./Navbar.styles";


function Navbar(props: HeaderProps) {
  
  const setBoolean = useBooleanStore(state => state.setBoolean);

  const toggle = useCardStore(state => state.setOption);

  const options: IOptions[] = [
    {
      option: "crear",
      icon: <Services />
    },
    {
      option: "mostrar",
      icon: <Download />
    },
    {
      option: "buscar",
      icon: <FormText />
    },
    {
      option: "actualizar",
      icon: <FormText />
    },
    {
      option: "habilitados",
      icon: <FormText />
    }
  ];

  return (
    <>
      <StyledNavbar {...props}>
        <div className="nav">
          {options.map((item) => (
            <div className="nav__item" key={item.option}>
              <div className="nav__icon">{item.icon}</div>
              <div className="nav__link">
                <button className="nav__button" onClick={ ()=> {toggle(item.option); setBoolean()} }>
                  {item.option}
                </button>
              </div>
            </div>
          ))}
        </div>
      </StyledNavbar>
    </>
  );
}
export default Navbar;
