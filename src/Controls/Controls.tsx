import s from './Floor.module.scss'
import styled from "styled-components";
import HouseCount from "./HouseCount/HouseCount";
import SliderWithNum from "./SliderWithNum/SliderWithNum";
import SuperRange from "./utils/SuperRange";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {addFloorsAC, addHouseAC, h1, HouseType} from "../state/houses-reducer";
import {addFloorAC, changeColorAC, floorReducer, FloorType} from "../state/floor-reducer";
import {useEffect, useState} from 'react';
import {v1} from "uuid";
import SuperSelect from "./utils/SuperSelect";

type Propstype = {
    houseID: string
    floorsCount: number
    housenumber:number
}
const arrColor = ['', 'green', 'black', 'blue', 'white', 'red']


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
    const [color, onChangecolor] = useState('')

    const [floors, setFlors] = useState(1
    )

    const dispatch = useDispatch()
    const housecount = useSelector<AppRootStateType, Array<HouseType>>(state => state.houses).length
    const floorsCount = useSelector<AppRootStateType, Array<FloorType>>(state => state.floor[props.houseID]).length
    const onChangeOption = (col: string) => {
        dispatch(changeColorAC(props.houseID, col))

        onChangecolor(col)
    }
    useEffect(() => {
            dispatch(addFloorsAC(props.houseID, floors))
        },
        [floors, setFlors])
    const onChangeRange = (value: number) => {
        if (value < 1) {
            return;
            
        }

        // early return

        dispatch(addFloorAC(props.houseID, "black", value, false))
        setFlors(value)
    }

    return (
        <StyledDiv>

            <FloorsControl>
                <HouseCount count={props.housenumber}/>
                <SliderWithNum flors={floorsCount}/>
                <SuperRange onChangeRange={onChangeRange} max={5} step={1} value={floors} min={1}/>
            </FloorsControl>
            <SuperSelect
                options={arrColor}
                value={color}
                onChangeOption={onChangeOption}
            />

        </StyledDiv>
    );
}

export default Controls