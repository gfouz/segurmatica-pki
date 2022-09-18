import { proxy } from 'valtio';
import { IStoreProps } from './constants';

//this state is for storing comming data from server.
interface IStoreData {
  stack: IStoreProps;
  setStack: (info: object) => object;
}
const store: IStoreData = proxy({
  stack: {},
  setStack: (info) => Object.assign(store.stack, info),
});

//this another is for sidebar options.
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
