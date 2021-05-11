import s from './Floor.module.scss'
import styled from "styled-components";

type Propstype = {
    count:string
}


export function HouseCount(props: Propstype) {
    const StyledDiv = styled.div`
   
      justify-content: flex-start;
      margin: 0;
      padding: 0;
          `

    return (
        <StyledDiv>
            <span>House {props.count}</span>
        </StyledDiv>
    );
}

export default HouseCount