import s from './Floor.module.scss'
import styled from "styled-components";
import HouseCount from "./HouseCount/HouseCount";
import SliderWithNum from "./SliderWithNum/SliderWithNum";
import SuperRange from "./utils/SuperRange";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {addHouseAC, h1, HouseType} from "../state/houses-reducer";
import {addFloorAC, FloorType} from "../state/floor-reducer";
import {useState} from 'react';
import {v1} from "uuid";

type Propstype = {}


export function Controls(props: Propstype) {
    const StyledDiv = styled.div`
      width: 100%;
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
    const [flors, setFlors] = useState(1)
    const dispatch = useDispatch()

    const housecount = useSelector<AppRootStateType, Array<HouseType>>(state => state.houses).length
    const onChangeRange = (value: number) => {
        setFlors(value)
    for (let i = 0; i <= value; i++) {

        dispatch(addFloorAC(h1, "black"))
}


    }

    return (
        <StyledDiv>
            <FloorsControl>
                <HouseCount count={housecount}/>
                <SliderWithNum flors={flors}/>
                <SuperRange onChangeRange={onChangeRange} max={5} value={flors} min={1}/>
            </FloorsControl>
        </StyledDiv>
    );
}

export default Controls