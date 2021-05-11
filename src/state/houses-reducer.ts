import {v1} from 'uuid';

export type HouseType = {
    houseID: string,
    floors:number


}
export  type AddHouseTypeAC = {
    type: 'ADD-HOUSE'
    houseID: string
    floors:number
}
type RemoveHouseTypeAC = {
    type: 'REMOVE-HOUSE'
    houseID: any
}
type SetHallColorTypeAC = {
    type: 'SETCOLOR-HALL'
    houseID: string
    hallcolor: string
}
type addFloorsAC={
    type: 'ADD-FLOORS',
    houseID: string
    floors: number
}
type ActionsTypes = AddHouseTypeAC |
    RemoveHouseTypeAC | SetHallColorTypeAC |addFloorsAC

export const h1 = v1()

export const h2 = v1()


const initialState: Array<HouseType> = [
    {houseID: h1,floors:1}
]


export const housesReducer = (state: Array<HouseType> = initialState, action: ActionsTypes): Array<HouseType> => {
    switch (action.type) {

        case 'ADD-HOUSE': {
            return [...state, {
                houseID: action.houseID,floors:action.floors
            }]
        }

        case 'REMOVE-HOUSE': {
            const copyState = {...state};
            delete copyState[action.houseID];
            return copyState;
        }

        default:
            return state;
    }
}
export const addHouseAC = (houseID: string,floors:number): AddHouseTypeAC => {
    return {type: 'ADD-HOUSE', houseID,floors}
}
export const removeHouseAC = (houseID: string) => {
    return {type: 'REMOVE-HOUSE', houseID}
}
export const setHallColorAC = (houseID: any, hallcolor: string) => {
    return {type: 'SETCOLOR-HALL', houseID, hallcolor}
}
export const addFloorsAC = (houseID: any, floors:number) => {
    return {type: 'ADD-FLOORS', houseID, floors}
}