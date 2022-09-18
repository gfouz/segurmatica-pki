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
    comp: <Creator url='funcionalidades' />,
  },
  {
    option: 'mostrar',
    comp: <Getter url='funcionalidades' queryKey='all-functionalities' />,
  },
  {
    option: 'buscar',
    comp: (
      <GetById url='funcionalidades' queryKey='funcionalidades-id' />
    ),
  },
  {
    option: 'habilitados',
    comp: (
      <GetEnabled queryKey='funcionalidades-enabled' url='funcionalidades/enabled/true' />
    ),
  },
  {
    option: 'actualizar',
    comp: <Updater url='funcionalidades' />,
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
