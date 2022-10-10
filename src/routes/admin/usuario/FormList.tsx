import GetEnabled from '../common/GetEnabled';
import GetByName from '../common/GetByName';
import Getter from '../common/Getter';
import Update from './Updater';
import Creator from './Creator';
import GetByParams from './GetByParams';
import { Heading } from '@chakra-ui/react';

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
    comp: <Creator path='users' />,
  },
  {
    option: 'mostrar',
    icon: <SearchPlus />,
    comp: <Getter url='users' queryKey='all-users' />,
  },
  {
    option: 'buscar',
    icon: <Search />,
    comp: <GetByName allnames='users' />,
    
  },
  {
    option: 'habilitados',
    icon: <Rocket />,
    comp: <GetEnabled queryKey='users-enabled' url='users/enabled/true' />,
  },
  {
    option: 'asociado',
    icon: <CodeBranch />,
    comp: <GetByParams />,
  },
  {
    option: 'actualizar',
    icon: <Edit />,
    comp: <Update queryKey='user-update' url='users' />,
  },
];
