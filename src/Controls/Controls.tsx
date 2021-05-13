import styled from "styled-components";
import HouseCount from "./HouseCount/HouseCount";
import SliderWithNum from "./SliderWithNum/SliderWithNum";
import SuperRange from "./utils/SuperRange";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {addFloorAC, changeColorAC, changeColorFloorAC, FloorType} from "../state/floor-reducer";
import SuperSelect from "./utils/SuperSelect";
import React from "react";
import { v1 } from "uuid";
import { removeHouseAC } from "../state/houses-reducer";

type Propstype = {
    houseID: string
    housenumber: number
}
const arrColor = ['white', 'green', 'black', 'blue', 'red']
const arrColorFloor = ['white', 'green', 'black', 'blue', 'red']

export function Controls(props: Propstype) {
    const StyledDiv = styled.div`
      width: 100%;
      border: 1px solid;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      position: relative;
      @media screen and (max-width: 664px) {
        flex-direction: column;
      }
          `
    const FloorsControl = styled.div`
      width: 33%;
      height: 100%;
      border: 1px solid;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-block-start: 0;
      @media screen and (max-width: 664px) {
        width: 100%;
      }
     

    `
    const Buttonwrapper = styled.div`
      margin: 3px;
    `

    const dispatch = useDispatch()
    const floorsCount = useSelector<AppRootStateType, Array<FloorType>>(state => state.floor[props.houseID]).length
    const houseColor = useSelector<AppRootStateType, any>(state => state.floor[props.houseID][0].color)
    const floorColor = useSelector<AppRootStateType, any>(state => state.floor[props.houseID][state.floor[props.houseID].length-1].color)
    const onChangeOption = (col: string) => {
        dispatch(changeColorAC(props.houseID, col))
    }

    ///floor color set
    const onChangeColorFloor = (col: string) => {
        dispatch(changeColorFloorAC(props.houseID, col))
    }

    const onChangeRange = (value: number) => {
        if (value < 1) {
            return;
        }
// let f1=v1()
        // early return

        dispatch(addFloorAC(props.houseID, "white", value, false))
        // dispatch(changeColorAC(props.houseID, houseColor))
    }
    const delHouse=()=>{
        dispatch(removeHouseAC(props.houseID))
    }
    return (
        <StyledDiv>

            <FloorsControl>
                <HouseCount count={props.housenumber}/>
                <SliderWithNum flors={floorsCount}/>
                <SuperRange onChangeRange={onChangeRange} max={9} step={1} value={floorsCount} min={1}/>

            </FloorsControl>
            <div><span>color house:</span> <SuperSelect
                options={arrColor}
                value={floorColor}
                onChangeOption={onChangeOption}
            /></div>
            <div><span>color floor: </span><SuperSelect
                options={arrColorFloor}
                value={houseColor}
                onChangeOption={onChangeColorFloor}
            /></div>
            <Buttonwrapper>
                <button onClick={delHouse}>X</button>
            </Buttonwrapper>
        </StyledDiv>
    );
}

export default Controls