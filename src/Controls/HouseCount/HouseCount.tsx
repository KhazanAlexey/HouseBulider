import styled from "styled-components";

type Propstype = {
    count:number
}


export function HouseCount(props: Propstype) {
    const StyledDiv = styled.div`
   
      justify-content: flex-start;
      margin: 0;
      padding: 0;
          `
    const Title = styled.h4`
      display: inline-block;
      width: 100%;
`;

    return (
        <StyledDiv>
            <Title><span>House {props.count}</span></Title>
        </StyledDiv>
    );
}

export default HouseCount