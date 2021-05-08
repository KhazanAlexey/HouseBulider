import s from './Floor.module.scss'
import styled from "styled-components";
import HouseCount from "./HouseCount/HouseCount";

type Propstype = {

}


export function Controls(props: Propstype) {
    const StyledDiv = styled.div`
      width: 100%;
      height: 50px; 
     border: 1px solid;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
          `
    const FloorsControl = styled.div`
      width: 50%;
      height: 100%; 
     border: 1px solid;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-block-start: 0;
      margin-block-end: 0;
   `
    return (
        <StyledDiv>
           <FloorsControl>
               <HouseCount count={1}/>
           </FloorsControl>
        </StyledDiv>
    );
}

export default Controls