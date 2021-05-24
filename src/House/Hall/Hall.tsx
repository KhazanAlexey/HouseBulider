import Window from "../Floor/Window/Window";
import Door from "./Door/Door";
import styled, {keyframes} from "styled-components";
import React from "react";
import {AnimationS} from "../../animation/breathAnimation";

type PtopsType = {
    color: string
    houseNumber: number
}


const Hall = React.memo(function (props: PtopsType) {

    const breatheAnimation = AnimationS(props.color)
    const StyledHall = styled.div`
      width: 200px;
      height: 100px;
      border-right: 3px solid black;
      border-left: 3px solid black;
      border-bottom: 3px solid black;
      display: flex;
      background: ${props.color};
      flex-direction: row;
      justify-content: space-around;
      align-items: center;    
      animation-name: ${breatheAnimation};
      animation-duration: 8s;
    `
    return (
        <StyledHall>
            <Window/>
            <Door houseNumber={props.houseNumber}/>
        </StyledHall>
    );
})


export default Hall;
