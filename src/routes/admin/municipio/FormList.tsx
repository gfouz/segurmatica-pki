import { Heading } from '@chakra-ui/react';
import GetEnabled from '../common/GetEnabled';
import Getter from '../common/Getter';
import Update from './Updater';
import Creator from '../common/Creator';
import GetByName from '../common/GetByName';
import GetByAssociation from './GetByAssociation';
import GetByAssociationEnabled from './GetByAssociationEnabled';

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
    comp: <Creator url='municipios' />,
  },
  {
    option: 'mostrar',
    icon: <SearchPlus />,
    comp: <Getter url='municipios' queryKey='all-municipios' />,
  },
  {
    option: 'buscar',
    icon: <Search />,
    comp: <GetByName allnames='municipios' />,
    
  },
  {
    option: 'habilitados',
    icon: <Rocket />,
    comp: <GetEnabled queryKey='mun-enabled' url='municipios/enabled/true' />,
  },
  {
    option: 'asociado',
    icon: <CodeBranch />,
    comp: <GetByAssociation />,
  },
  {
    option: 'asociado habilitado',
    icon: <CodeBranch />,
    comp: <GetByAssociationEnabled />,
  },
  {
    option: 'actualizar',
    icon: <Edit />,
    comp: <Update url='municipios' />,
  },
];
