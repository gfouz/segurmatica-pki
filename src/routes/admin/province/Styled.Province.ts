import styled from 'styled-components';

const StyledProvince = styled.div`
  width: 100%;
  position: relative;
  background-color: #f1f1f1;
  .province {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .province__divider {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
 .bg-grey  {
  background-color: #3a3839;
 }
 .btn-backwards {
     position: absolute;
     top: 0;
     left: 2em;
     text-transform: uppercase;
     font-weight: bolder;
     color: #0660b1;
   }
  .btn-backwards__content {
     display: flex;
  } 
  .btn-backwards__text {
    font-weight: bolder;
    position: relative;
    top: 8px;
    left: 5px;
  }
`;
export default StyledProvince;