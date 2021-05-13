import {v1} from 'uuid';

export type HouseType = {
    houseID: string,
    houseNumber:number


}
export  type AddHouseTypeAC = {
    type: 'ADD-HOUSE'
    houseID: string
    houseNumber:number
}
type RemoveHouseTypeAC = {
    type: 'REMOVE-HOUSE'
    houseID: any
}

type addFloorsAC={
    type: 'ADD-FLOORS',
    houseID: string
    floors: number
}

type ActionsTypes = AddHouseTypeAC |
    RemoveHouseTypeAC | addFloorsAC

export const h1 = v1()

export const h2 = v1()


const initialState: Array<HouseType> = [
    {houseID: h1,houseNumber:1}
]


export const housesReducer = (state: Array<HouseType> = initialState, action: ActionsTypes): Array<HouseType> => {
    switch (action.type) {

        case 'ADD-HOUSE': {
            return [...state, {
                houseID: action.houseID,houseNumber:action.houseNumber
            }]
        }

        case 'REMOVE-HOUSE': {

             return state.filter(h => h.houseID != action.houseID)
        }

        default:
            return state;
    }
}
export const addHouseAC = (houseID: string,houseNumber:number): AddHouseTypeAC => {
    return {type: 'ADD-HOUSE', houseID,houseNumber}
}
export const removeHouseAC = (houseID: string) => {
    return {type: 'REMOVE-HOUSE', houseID}
}
