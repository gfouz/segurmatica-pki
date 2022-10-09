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
    comp: <Creator url='estados' />,
  },
  {
    option: 'mostrar',
    comp: <Getter url='estados' queryKey='all-estados' />,
  },
  {
    option: 'buscar',
    comp: <GetByName allnames='estados' />,
  },
  {
    option: 'habilitados',
    comp: <GetEnabled queryKey='estados-enabled' url='estados/enabled/true' />,
  },
  {
    option: 'actualizar',
    comp: <Updater url='estados' />,
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
