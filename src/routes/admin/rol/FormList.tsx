import GetEnabled from '../common/GetEnabled';
import Getter from '../common/Getter';
import Updater from '../common/Updater';
import Creator from '../common/Creator';
import GetByName from '../common/GetByName';
import { Heading } from '@chakra-ui/react';

export interface IOptions {
  option: string;
  comp: React.ReactNode;
}

export const FormsList: IOptions[] = [
  {
    option: 'añadir',
    comp: <Creator url='rols' />,
  },
  {
    option: 'mostrar',
    comp: <Getter url='rols' queryKey='rols' />,
  },
  {
    option: 'buscar',
    comp: <GetByName allnames='rols' />,
  },
  {
    option: 'habilitados',
    comp: <GetEnabled queryKey='rolsenabled' url='rols/enabled/true' />,
  },
  {
    option: 'actualizar',
    comp: <Updater url='rols' />,
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
