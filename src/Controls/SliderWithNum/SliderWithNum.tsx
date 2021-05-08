import s from './Floor.module.scss'
import styled from "styled-components";

type Propstype = {
flors:number
}


export function SliderWithNum(props: Propstype) {
    const StyledDiv = styled.div`
      width:30%;
      height: 50px; 
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: small;

    `
    const Floors = styled.div`
      width: 20px;
      height: 20px; 
     border: 1px solid;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-block-start: 0;
      margin-block-end: 0;
      font-size: small;
   `
    return (
        <StyledDiv>
            <span>Floors: </span>
           <Floors>
               {props.flors}
           </Floors>
        </StyledDiv>
    );
}

export default SliderWithNum