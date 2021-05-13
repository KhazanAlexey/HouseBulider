import {v1} from "uuid";
import {AddHouseTypeAC, h1, h2} from "./houses-reducer";

export type FloorType = {
    Floorid: string
    color: string
    door:boolean
}

export type FloorStateType = {
    [key: string]: Array<FloorType>
}
const initialState: FloorStateType = {
[h1]: [{color:'',Floorid:h2,door:true}]


}


export const floorReducer = (state: FloorStateType = initialState, action: ActionsType): FloorStateType => {
    switch (action.type) {
        case 'CHANGE-COLOR': {
            const stateCopy = {...state}
            let currentHouseFloors = stateCopy[action.Houseid];

            // let newColoredFloor= currentHouseFloors.map(f=>{if(f.color){
            //     return{
            //         ...f,color: action.color
            //     }
            // } else
            //  return    { ...f}
            // })
            let newColoredFloor = currentHouseFloors.map(f => {
                return {
                    ...f, color: action.color
                }
            })

            stateCopy[action.Houseid] = [...newColoredFloor]
            return stateCopy
        }
        case "CHANGE-COLOR-FLOOR": {
            const stateCopy = {...state}
            let currentHouseFloors = stateCopy[action.Houseid];
            let newColoredFloors=currentHouseFloors.map(f=>
                f.color==='white'? {...f,color: action.color}:{...f}
            )

            stateCopy[action.Houseid] = [...newColoredFloors]
            return stateCopy
        }
        case 'ADD-HOUSE': {
            return {
                ...state,
                [action.houseID]: []
            }
        }
        case 'ADD-FLOOR': {
            const stateCopy = {...state}

            let currentHouseFloors = stateCopy[action.Houseid];
            if (action.florsValue < currentHouseFloors.length) {
                currentHouseFloors.shift()

            } else {
                const newFloor: FloorType = {
                    Floorid: v1(),
                    color: action.color,
                    door: action.door
                }
                const floors = [newFloor, ...currentHouseFloors];
                stateCopy[action.Houseid] = floors;
            }


            return stateCopy;
        }
        default:
            return state;
    }
}


type ActionsType = ReturnType<typeof changeColorAC> | ReturnType<typeof addFloorAC> |AddHouseTypeAC |
    ReturnType<typeof changeColorFloorAC>

export const addFloorAC = (Houseid: string, color: string, florsValue: number,door:boolean,floorId:string) => ({
    type: 'ADD-FLOOR',
    Houseid,
    color,
    florsValue,
    door,
    floorId
} as const)
export const changeColorAC = (Houseid: string, color: string) => ({type: 'CHANGE-COLOR', Houseid, color} as const)
export const changeColorFloorAC = (Houseid: string, color: string) => ({type: 'CHANGE-COLOR-FLOOR', Houseid, color} as const)

