import s from './App.module.scss';
import Roof from "./Roof/Roof";
import style from './House.module.scss'
import Hall from "./Hall/Hall";
import Floor from "./Floor/Floor";
import {FloorStateType, FloorType} from "../state/floor-reducer";
import styled from 'styled-components'

type PropsType = {
    key: any
    f: Array<FloorType>
}

function House(props: PropsType) {

    // const col=props.f[0].color
    return (

        <div className={style.house}>
            <Roof/>
            {props.f.map(f => {
                    return f.door ?  <Hall color={f.color}/>:<Floor key={f.Floorid} color={f.color}/>
                       }
            )}
           

        </div>
    );
}

export default House;
