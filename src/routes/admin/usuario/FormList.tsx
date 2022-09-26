import GetEnabled from '../common/GetEnabled';
import GetById from '../common/GetById';
import Getter from '../common/Getter';
import Update from './Updater';
import Creator from './Creator';
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
    comp: <GetById url='users' queryKey='user-id' />,
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
    comp: <Heading size='md'>NO EXISTEN ASOCIACIONES!</Heading>,
  },
  {
    option: 'asociado habilitado',
    comp: <Heading size='md'>NO EXISTEN ASOCIACIONES !</Heading>,
  },
  {
    option: 'por nombre',
    comp: <Heading size='md'>NO EXISTEN ASOCIACIONES!</Heading>,
  },
];
