import GetEnabled from '../common/GetEnabled';
import Getter from '../common/Getter';
import Updater from './Updater';
import Creator from './Creator';
import GetByParams from '../common/GetByParams';
import { Heading } from '@chakra-ui/react';
import GetByName from '../common/GetByName';

import { IListProps } from '../common/constants';
import Edit from '../common/icons/Edit';
import Rocket from '../common/icons/Rocket'
import Search from '../common/icons/Search';
import FileAlt from '../common/icons/FileAlt';
import CodeBranch from '../common/icons/CodeBranch';
import SearchPlus from '../common/icons/SearchPlus';


export const FormsList: IListProps[] = [
  {
    option: 'añadir',
    icon: <Edit />,
    comp: <Creator />,
  },
  {
    option: 'mostrar',
    icon: <SearchPlus />,
    comp: <Getter url='representantes' queryKey='agent-all' />,
  },
  {
    option: 'buscar',
    icon: <Search />,
    comp: <GetByName  allnames='representantes' />,
    
  },
  {
    option: 'habilitados',
    icon: <Rocket />,
    comp: <GetEnabled queryKey='agent-enabled' url='representantes/enabled/true' />,
  },
  {
    option: 'asociado',
    icon: <CodeBranch />,
    comp: (
      <GetByParams
        path='representantes/empresa-institucion'
        attached='empresas-instituciones'
        queryKey='func-reg'
      />
    ),
  },
  {
    option: 'actualizar',
    icon: <Edit />,
    comp: <Updater />,
  },
];
