import s from './App.module.scss';
import Roof from "./Roof/Roof";
import style from './House.module.scss'
import Hall from "./Hall/Hall";
import Floor from "./Floor/Floor";
import {FloorStateType, FloorType} from "../state/floor-reducer";
import styled from 'styled-components'

type PropsType = {
    color: string
    floors: number
    key: any
    f: Array<FloorType>
}

function House(props: PropsType) {
    return (

        <div className={style.house}>
            <Roof/>
            {props.f.map(f => {


                    return <Floor  color={f.color}/>
                }
            )}
            <Hall/>

        </div>
    );
}

export default House;
