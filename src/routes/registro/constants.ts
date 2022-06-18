type DrawerStyleProps = {
  width: string;
  height: string;
  backgroundImage: string;
  backgroundPosition: string;
  backgroundRepeat: string;
  backgroundSize: string;
};

type ToggleButtonProps = {
  color: string;
};

export const lateralMenu: DrawerStyleProps = {
  width: "100%",
  height: "150px",
  backgroundImage: `url('./images/aside.jpg')`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "70px",
};

export const toggleButton: ToggleButtonProps = {
  color: "#f8f8f8",
};
