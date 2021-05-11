import hallstyle from './hall.module.scss';
import Window from "../Floor/Window/Window";
import Door from "./Door/Door";
import styled from "styled-components";
type PtopsType={
    color: string
}
function Hall(props:PtopsType) {
    const StyledHall = styled.div`
      width: 200px;
      height: 100px;  
      background: ${props.color};;
      border-right: 3px solid black;
      border-left: 3px solid black;
      border-bottom:3px solid black;
      
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
          `
    return (
        <StyledHall >
            <Window/>
            <Door/>
        </StyledHall>
    );
}

export default Hall;