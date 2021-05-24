import Roof from "./Roof/Roof";
import style from './House.module.scss'
import Hall from "./Hall/Hall";
import Floor from "./Floor/Floor";
import {FloorType} from "../state/floor-reducer";
import React from "react";
import styled from "styled-components";

type PropsType = {
    f: Array<FloorType>
    houseNumber: number

}
const House = (props: PropsType) => {

    return (

        <>
            <div className={style.house}>
                <Roof/>
                {props.f.map(f => {

                        return f.door ? <Hall key={f.Floorid} houseNumber={props.houseNumber} color={f.color}/> :
                            <Floor key={f.Floorid} color={f.color}/>
                    }
                )}
                <div className={style.number}>
                    {props.houseNumber}
                </div>
            </div>

        </>

    );
}


export default House;
