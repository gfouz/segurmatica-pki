import GetEnabled from '../common/GetEnabled';
import Getter from '../common/Getter';
import Updater from '../common/Updater';
import Creator from '../common/Creator';
import { Heading } from '@chakra-ui/react';
import GetByName from '../common/GetByName';

export interface IOptions {
  option: string;
  comp: React.ReactNode;
}

export const FormsList: IOptions[] = [
  {
    option: 'añadir',
    comp: <Creator url='organismos' />,
  },
  {
    option: 'mostrar',
    comp: <Getter url='organismos' queryKey='all-organism' />,
  },
  {
    option: 'buscar',
    comp: <GetByName allnames='organismos' />,
  },
  {
    option: 'habilitados',
    comp: <GetEnabled queryKey='organismos-enabled' url='organismos/enabled/true' />,
  },
  {
    option: 'actualizar',
    comp: <Updater url='organismos' />,
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
