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
  width: '100%',
  height: '150px',
  backgroundImage: `url('./images/aside.jpg')`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '70px',
};

export const toggleButton: ToggleButtonProps = {
  color: '#f8f8f8',
};

export const theme = {
  green: 'linear-gradient(to right, #222222, #9900FF );',
  rainbow: 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);',
};

//FF1AA3 #FF3333  #9900FF
