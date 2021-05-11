import s from './App.module.scss';
import House from "./House/House";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {addHouseAC, HouseType, setHallColorAC} from "./state/houses-reducer";
import Controls from "./Controls/Controls";
import {v1} from "uuid";
import {addFloorAC} from "./state/floor-reducer";

function App() {
    const dispatch = useDispatch()
    const house = useSelector<AppRootStateType, Array<HouseType>>(state => state.houses)
    const floors = useSelector<AppRootStateType, any>(state => state.floor)
    const newHouseId = v1()
    const addHouseHandler = () => {
        dispatch(addHouseAC(newHouseId,1))
        dispatch(addFloorAC(newHouseId, '', 1, true))

    }

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
                        {house.map(c => <Controls floorsCount={c.floors} houseID={c.houseID}/>)}



                    </div>
                    <div className={s.footerControls}>
                        <button onClick={addHouseHandler}>Add house</button>
                    </div>
                </div>
                <div className={s.placeForHouses}>
                    {house.map(h => {
                        let f = floors[h.houseID]


                        return <House f={f} key={h.houseID}/>


                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default App;