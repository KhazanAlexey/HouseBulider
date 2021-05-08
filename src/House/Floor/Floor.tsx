import s from './Floor.module.scss'
import Window from "../Floor/Window/Window";

function Floor() {


    return (
        <div className={s.floor}>
            <Window/>
            <Window/>
        </div>
    );
}

export default Floor;
