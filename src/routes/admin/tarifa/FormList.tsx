import GetEnabled from '../common/GetEnabled';
import Getter from '../common/Getter';
import Update from './Updater';
import GetByName from '../common/GetByName';
import Creator from './Create';
import { Heading } from '@chakra-ui/react';

export interface IOptions {
  option: string;
  comp: React.ReactNode;
}

export const FormsList: IOptions[] = [
  {
    option: 'añadir',
    comp: <Creator url='tarifas' />,
  },
  {
    option: 'mostrar',
    comp: <Getter url='tarifas' queryKey='all-tarifas' />,
  },
  {
    option: 'buscar',
    comp: <GetByName allnames='rols' />,
  },
  {
    option: 'habilitados',
    comp: <GetEnabled url='tarifas/enabled/true' queryKey='tarifas-active' />,
  },
  {
    option: 'actualizar',
    comp: <Update url='tarifas' />,
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
