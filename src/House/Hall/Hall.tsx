import hallstyle from './hall.module.scss';
import Window from "../Floor/Window/Window";
import Door from "./Door/Door";

function Hall() {


    return (
        <div className={hallstyle.hall}>
            <Window/>
            <Door/>
        </div>
    );
}

export default Hall;
