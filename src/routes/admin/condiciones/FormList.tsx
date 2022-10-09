import GetTerms from './GetTerms';
import TermsEditor from './TermsEditor';
import { Heading } from '@chakra-ui/react';

export interface IFormList {
  option: string;
  comp: React.ReactNode;
}

export const FormsList: IFormList[] = [
  {
    option: 'añadir',
    comp: <TermsEditor url='condiciones' queryKey='terms-to-change' />,
  },
  {
    option: 'mostrar',
    comp: <GetTerms url='condiciones' queryKey='fullterms' />,
  },
  
];
