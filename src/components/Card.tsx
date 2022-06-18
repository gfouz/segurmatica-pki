import styled from 'styled-components';
import { 
  Box,
  Stack,
  Heading,
  Skeleton, 
  SkeletonCircle, 
  SkeletonText 
  } from '@chakra-ui/react';

export default function Card() {
  
  return (
   <StyledSkeleton> 
      <Heading 
        size='2xl' 
        color='#66CC00'
      >
      LOADING...
      </Heading>
    <Box w="100%">
      <Skeleton  height='20px' startColor='grey' />
    </Box>
   </StyledSkeleton>  
  )
}

const StyledSkeleton = styled.div`
 width: 100%;
 padding: 4em;
 min-height: 100vh;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: flex-start;
`;

//how to add a new declaration (.d.ts) file containing `declare module 'react-slick