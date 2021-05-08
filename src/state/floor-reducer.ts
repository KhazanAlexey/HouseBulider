import {v1} from "uuid";
import House from "../House/House";
import {h1, h2, h3} from "./houses-reducer";

export type FloorType = {
    Floorid: string
    color: string
}

export type FloorStateType = {
    [key: string]: Array<FloorType>
}
const initialState: FloorStateType = {
    [h1]: [{color: "green", Floorid: "green"},{color: 'red', Floorid: "green"}],
    [h2]: [{color: 'yellow', Floorid: "green"}],
    [h3]: [{color: 'red', Floorid: "green"}],

}
type ActionsType = ReturnType<typeof addFloorAC>

export const floorReducer = (state: FloorStateType = initialState, action: ActionsType): FloorStateType => {
    switch (action.type) {

        case 'ADD-FLOOR': {
debugger
            const stateCopy = {...state}
            const newFloor: FloorType = {
                Floorid: v1(),
                color: action.color
            }
            const floor = stateCopy[action.Houseid];
            const floors = [newFloor, ...floor];
            stateCopy[action.Houseid] = floors;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addFloorAC = (Houseid: string, color: string) => {
    return {type: 'ADD-FLOOR', Houseid, color}
}

