import * as React from "react";

interface ISubtitle {
  m: string;
  size: string;
  color: string;
  fontFamily: string;
}

interface ILogo {
  margin: string;
  width: string;
  height: string;
}

export const subtitleProps: ISubtitle = {
  size: "sm",
  m: "0.5em 0",
  color: "#666666",
  fontFamily: "calibri",
};

export const logoProps: ILogo = {
  width: "150px",
  height: "auto",
  margin: "0 3.5em",
};

export const drawerProps: React.CSSProperties = {
  height: "150px",
  backgroundImage: `url('./images/aside.jpg')`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "70px",
};
