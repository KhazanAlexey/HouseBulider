// import * as persistState from "redux-localstorage";
import {combineReducers, createStore} from 'redux';
import {housesReducer} from "./houses-reducer";
import {floorReducer} from "./floor-reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
// @ts-ignore
const persistedState = localStorage.getItem('reduxState')  ? JSON.parse(localStorage.getItem('reduxState'))
    : {}
const rootReducer = combineReducers({
    houses: housesReducer,
    floor: floorReducer
})

// непосредственно создаём store
export const store = createStore(rootReducer,persistedState);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
