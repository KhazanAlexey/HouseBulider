import {keyframes} from "styled-components";

export const AnimationS=(color:any)=>{
    return  keyframes`
      0% {
        background: white;
      }
      100% {
        background: ${color};
      }
    `

}