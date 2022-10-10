import GetTerms from './GetTerms';
import TermsEditor from './TermsEditor';
import Services from '../common/icons/Services';
import Download from '../common/icons/Download';
import { Heading } from '@chakra-ui/react';
import { IListProps } from '../common/constants';

export const FormsList: IListProps[] = [
  {
    option: 'añadir',
    icon: <Services />,
    comp: <TermsEditor url='condiciones' queryKey='terms-to-change' />,
  },
  {
    option: 'mostrar',
    icon: <Download />,
    comp: <GetTerms url='condiciones' queryKey='fullterms' />,
  },
  
];
