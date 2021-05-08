import {v1} from 'uuid';

export type HouseType = {
    houseID: string
    color: string
    floors: number
}
type AddHouseTypeAC = {
    type: 'ADD-HOUSE'
    houseID: string
    floors: number
    hallcolor: string
}
type RemoveHouseTypeAC={
    type: 'REMOVE-HOUSE'
    houseid: any
}
type ActionsTypes = AddHouseTypeAC|
    RemoveHouseTypeAC

export const h1=v1()
export const h2=v1()
export const h3=v1()


const initialState: Array<HouseType> = [
    {houseID: h1, color: 'green', floors: 5},
    {houseID: h2, color: 'green', floors: 5},
    {houseID: h3, color: 'green', floors: 5}]


export const housesReducer = (state: Array<HouseType> = initialState, action: ActionsTypes): Array<HouseType> => {
    switch (action.type) {

        case 'ADD-HOUSE': {
            return [{
                houseID: action.houseID, floors: action.floors, color: action.hallcolor}, ...state]
        }

        case 'REMOVE-HOUSE':{
            const copyState = {...state};
            delete copyState[action.houseid];
            return copyState;
        }
        default:
            return state;
    }
}
export const addHouseAC = (houseID: string, floors: number, hallcolor: string): AddHouseTypeAC => {
    return {type: 'ADD-HOUSE', houseID, floors, hallcolor}
}
export const removeHouseAC = (houseid: string) => {
    return {type: 'REMOVE-HOUSE', houseid}
}