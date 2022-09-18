import GetEnabled from '../common/GetEnabled';
import GetById from '../common/GetById';
import Getter from '../common/Getter';
import Updater from '../common/Updater';
import Creator from '../common/Creator';
import { Heading } from '@chakra-ui/react';

export interface IOptions {
  option: string;
  comp: React.ReactNode;
}

export const FormsList: IOptions[] = [
  {
    option: 'añadir',
    comp: <Creator url='finalidades' />,
  },
  {
    option: 'mostrar',
    comp: <Getter url='finalidades' queryKey='finalidades-all' />,
  },
  {
    option: 'buscar',
    comp: <GetById url='finalidades' queryKey='finalidades-id' />,
  },
  {
    option: 'actualizar',
    comp: <Updater url='finalidades' />,
  },
  {
    option: 'asociado',
    comp: <Heading size='md'>NO EXISTEN ASOCIACIONES!</Heading>,
  },
  {
    option: 'asociado habilitado',
    comp: <Heading size='md'>NO EXISTEN ASOCIACIONES !</Heading>,
  },
];
