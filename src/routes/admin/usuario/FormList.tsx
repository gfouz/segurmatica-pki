import GetEnabled from '../common/GetEnabled';
import GetByName from '../common/GetByName';
import Getter from '../common/Getter';
import Update from './Updater';
import Creator from './Creator';
import GetByParams from './GetByParams';
import { Heading } from '@chakra-ui/react';

export interface IOptions {
  option: string;
  comp: React.ReactNode;
}

export const FormsList: IOptions[] = [
  {
    option: 'añadir',
    comp: <Creator path='users' />,
  },
  {
    option: 'mostrar',
    comp: <Getter url='users' queryKey='all-users' />,
  },
  {
    option: 'buscar',
    comp: <GetByName allnames='users' />,
  },
  {
    option: 'habilitados',
    comp: <GetEnabled queryKey='users-enabled' url='users/enabled/true' />,
  },
  {
    option: 'actualizar',
    comp: <Update queryKey='user-update' url='users' />,
  },
  {
    option: 'asociado',
    comp: <GetByParams />,
  },
  {
    option: 'asociado habilitado',
    comp: <Heading size='md'>NO EXISTEN ASOCIACIONES !</Heading>,
  },
  
];
