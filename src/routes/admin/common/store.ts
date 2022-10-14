import { proxy } from 'valtio';
import { IStoreProps } from './constants';

//this state is for storing incoming data from server.
interface IStoreData {
  stack: IStoreProps;
  setStack: (info: object) => object;
}
const store: IStoreData = proxy({
  stack: {},
  setStack: (info) => Object.assign(store.stack, info),
});

interface IUserProps {
  id: string;
  email: string;
  password: string;
  rolId: string;
  enabled: boolean;
}
interface IUserState {
  user: IUserProps;
  setUser: (newuser: IUserProps) => IUserProps;
}

const user: IUserProps = {
  id: '',
  email: '',
  password: '',
  rolId: '',
  enabled: false,
};

export const users: IUserState = proxy({
  user: user,
  setUser: (newuser) => Object.assign(users.user, newuser),
});

//this another is for sidebar or menu options.
interface IStateData {
  opt: string;
  setOption: (option: string) => string;
}
export const state: IStateData = proxy({
  opt: 'mostrar',
  setOption: (option) => (state.opt = option),
});

//this is a switcher to open or close the sidebar.
interface ISwitcher {
  st: boolean;
  setTrue: () => void;
  setFalse: () => void;
  reverse: () => boolean;
}

export const switcher: ISwitcher = proxy({
  st: false,
  setTrue: () => (switcher.st = true),
  setFalse: () => (switcher.st = false),
  reverse: () => (switcher.st = !switcher.st),
});

export default store;
