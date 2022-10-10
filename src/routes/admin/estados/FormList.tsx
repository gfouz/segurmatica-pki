import GetEnabled from '../common/GetEnabled';
import Getter from '../common/Getter';
import Updater from '../common/Updater';
import Creator from '../common/Creator';
import GetByName from '../common/GetByName';
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
    comp: <Creator url='estados' />,
  },
  {
    option: 'mostrar',
    icon: <SearchPlus />,
    comp: <Getter url='estados' queryKey='all-estados' />,
  },
  {
    option: 'buscar',
    icon: <Search />,
    comp: <GetByName allnames='estados' />,
    
  },
  {
    option: 'habilitados',
    icon: <Rocket />,
    comp: <GetEnabled queryKey='estados-enabled' url='estados/enabled/true' />,
  },
  {
    option: 'actualizar',
    icon: <Edit />,
    comp: <Updater url='estados' />,
  },
];
