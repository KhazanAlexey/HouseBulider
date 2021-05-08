import s from './App.module.scss';
import House from "./House/House";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {HouseType} from "./state/houses-reducer";
import {FloorType} from "./state/floor-reducer";
import Controls from "./Controls/Controls";

function App() {
    const house = useSelector<AppRootStateType, Array<HouseType>>(state => state.houses)
    const floors = useSelector<AppRootStateType, any>(state => state.floor)
    return (
        <div className={s.App}>
            <div className={s.haederWrapper}></div>
            <header className={s.header}>
                City Byilder
            </header>

            <div className={s.body}>
                <div className={s.controlsWrapper}>
                    <div className={s.title}>
                        Houses List
                    </div>
                    <div className={s.controls}>
                        <Controls/>


                        <div>house</div>
                        <div>house</div>
                        <div>house</div>
                        <div>house</div>
                    </div>
                    <div className={s.footerControls}>
                        <button>Add house</button>
                    </div>
                </div>
                <div className={s.placeForHouses}>
                    {house.map(h => {
                        let f = floors[h.houseID]
                        return <House floors={h.floors} f={f} key={h.houseID} color={h.color}/>
                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
