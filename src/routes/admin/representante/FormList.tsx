import GetEnabled from '../common/GetEnabled';
import GetById from '../common/GetById';
import Getter from '../common/Getter';
import Updater from './Updater';
import Creator from './Creator';
import GetByParams from '../common/GetByParams';
import { Heading } from '@chakra-ui/react';
import GetByName from '../common/GetByName';

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
    comp: (
      <GetByParams
        path='representantes/empresa-institucion'
        attached='empresas-instituciones'
        queryKey='func-reg'
      />
    ),
  },
  {
    option: 'asociado habilitado',
    comp: <Heading size='md'>NO EXISTEN ASOCIACIONES !</Heading>,
  },
  {
    option: 'por nombre',
    comp: (
      <GetByName path='representantes/name' allnames='representantes' queryKey='func_by_name' />
    ),
  },
];
