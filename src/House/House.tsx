import s from './App.module.scss';
import Roof from "./Roof/Roof";
import style from './House.module.scss'
import Hall from "./Hall/Hall";
import Floor from "./Floor/Floor";

function House() {
    return (

        <div className={style.house}>
            <Roof/>
            <Floor/>

            <Hall/>

        </div>
    );
}

export default House;
