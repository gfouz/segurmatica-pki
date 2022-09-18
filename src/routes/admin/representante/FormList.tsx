import GetEnabled from '../common/GetEnabled';
import GetById from '../common/GetById';
import Getter from '../common/Getter';
import Updater from './Updater';
import Creator from './Creator';
import { Heading } from '@chakra-ui/react';

export interface IOptions {
  option: string;
  comp: React.ReactNode;
}

export const FormsList: IOptions[] = [
  {
    option: 'añadir',
    comp: <Creator />,
  },
  {
    option: 'mostrar',
    comp: <Getter url='representantes' queryKey='agent-all' />,
  },
  {
    option: 'buscar',
    comp: <GetById url='representantes' queryKey='agent-id' />,
  },
  {
    option: 'habilitados',
    comp: <GetEnabled queryKey='agent-enabled' url='representantes/enabled/true' />,
  },
  {
    option: 'actualizar',
    comp: <Updater />,
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
