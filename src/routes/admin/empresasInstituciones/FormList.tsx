import { Heading } from '@chakra-ui/react';
import GetEnabled from '../common/GetEnabled';
import Getter from '../common/Getter';
import Updater from '../common/Updater';
import Creator from '../common/Creator';
import GetByName from '../common/GetByName';
import GetByTwoAssociations from './GetByTwoAssociations';

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
    comp: <Creator url='empresas-instituciones' />,
  },
  {
    option: 'mostrar',
    icon: <SearchPlus />,
    comp: <Getter url='empresas-instituciones' queryKey='emp-inst-all' />,
  },
  {
    option: 'buscar',
    icon: <Search />,
    comp: <GetByName allnames='empresas-instituciones' />,
    
  },
  {
    option: 'habilitados',
    icon: <Rocket />,
    comp: <GetEnabled queryKey='emp-inst-act' url='empresas-instituciones/enabled/true' />,
  },
  {
    option: 'actualizar',
    icon: <Edit />,
    comp: <Updater url='empresas-instituciones' />,
  },
  {
    option: 'asociado',
    icon: <CodeBranch />,
    comp: <GetByTwoAssociations />,
  },
];
