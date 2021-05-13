import Window from "../Floor/Window/Window";
import styled from "styled-components";

type Propstype = {
    color: string
}


export function Floor(props: Propstype) {
    const StyledDiv = styled.div`
      width: 200px;
      height: 100px;
      background: ${props.color};;
      border-right: 3px solid black;
      border-left: 3px solid black;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    
    `

    return (
        <StyledDiv>
            <Window/>
            <Window/>
        </StyledDiv>
    );
}

export default Floor