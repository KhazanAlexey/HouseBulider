import styled from "styled-components";
import HouseCount from "./HouseCount/HouseCount";
import SliderWithNum from "./SliderWithNum/SliderWithNum";
import SuperRange from "./utils/SuperRange";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {addFloorAC, changeColorAC, changeColorFloorAC, FloorType} from "../state/floor-reducer";
import SuperSelect from "./utils/SuperSelect";
import React, {useCallback} from "react";
import {removeHouseAC} from "../state/houses-reducer";
import {v1} from "uuid";

type Propstype = {
    houseID: string
    houseNumber: number
}
const arrColor = ['white','orange', 'green', 'black', 'blue', 'red']
const arrColorFloor = ['white','orange', 'green', 'black', 'blue', 'red']
const floorId=v1()
const StyledDiv = styled.div`
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      position: relative;
      @media screen and (max-width: 729px) {
        flex-direction: column;
        .select {
          width: 100px;
        }
      }
    `;
const FloorsControl = styled.div`
      max-width: 100px;
      min-width: 100px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-block-start: 0;
      @media screen and (max-width: 729px) {
        width: 100%;
        max-width: 100%;
      }
    `
const Buttonwrapper = styled.div`
      margin: 3px;
    `
const Controls= (props: Propstype)=> {




    const dispatch = useDispatch()
    const floorsCount = useSelector<AppRootStateType, Array<FloorType>>(state => state.floor[props.houseID]).length
    const houseColor = useSelector<AppRootStateType, string>(state => state.floor[props.houseID][0].color)
    const floorColor = useSelector<AppRootStateType, string>(state => state.floor[props.houseID][state.floor[props.houseID].length - 1].color)
    ///set color house
    const onChangeOption = useCallback((col: string) => {
        dispatch(changeColorAC(props.houseID, col))
    }, [props.houseID,dispatch])


    ///set color floor
    const onChangeColorFloor = useCallback((col: string) => {
        dispatch(changeColorFloorAC(props.houseID, col))
    }, [props.houseID,dispatch])

    ///add or reduce floor
    const onChangeRange =(value: number) => {
            if (value < 1) {
                return;
            }

            dispatch(addFloorAC(props.houseID, "white", value, false,floorId))
 // if you want all floors same color just use next line
            // dispatch(changeColorAC(props.houseID, houseColor))
        }
    ///removeHouse
    const delHouse =useCallback(() => {
        dispatch(removeHouseAC(props.houseID))
    },[props.houseID,dispatch])



    return (
        <StyledDiv>

            <FloorsControl>
                <HouseCount count={props.houseNumber}/>
                <SliderWithNum flors={floorsCount}/>
                <SuperRange onChangeRange={onChangeRange} max={9} step={1} value={floorsCount} min={1}/>

            </FloorsControl>
            <div className={'select'}><span>color house:</span> <SuperSelect
                options={arrColor}
                value={floorColor}
                onChangeOption={onChangeOption}
            /></div>
            <div className={'select'}><span>color floor: </span><SuperSelect
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