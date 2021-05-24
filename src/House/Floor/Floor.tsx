import Window from "../Floor/Window/Window";
import styled from "styled-components";
import React from "react";
import { AnimationS } from "../../animation/breathAnimation";

type Propstype = {
    color: string
}

const  Floor=React.memo(function (props: Propstype){

    
    const breatheAnimation = AnimationS(props.color)
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
      animation-name: ${breatheAnimation};
      animation-duration: 8s;
    `

    return (
        <StyledDiv>
            <Window/>
            <Window/>
        </StyledDiv>

    );




})

// export function Floor(props: Propstype) {
//     const breatheAnimation = AnimationS(props.color)
//     const StyledDiv = styled.div`
//       width: 200px;
//       height: 100px;
//       background: ${props.color};;
//       border-right: 3px solid black;
//       border-left: 3px solid black;
//       display: flex;
//       flex-direction: row;
//       justify-content: space-around;
//       align-items: center;
//       animation-name: ${breatheAnimation};
//       animation-duration: 8s;
//     `
//
//     return (
//         <StyledDiv>
//             <Window/>
//             <Window/>
//         </StyledDiv>
//     );
// }
//
export default Floor