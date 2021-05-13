import s from './App.module.scss';
import House from "./House/House";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {addHouseAC, HouseType,} from "./state/houses-reducer";
import Controls from "./Controls/Controls";
import {v1} from "uuid";
import {addFloorAC} from "./state/floor-reducer";
import {useCallback, useEffect,  useState} from "react";

function App() {
    const lastnum = useSelector<AppRootStateType, number>(state => state.houses[state.houses.length-1].houseNumber)

    useEffect(() => {
        setnumberHouse((lastnum+1))
    }, [lastnum])

    const [numberHouse, setnumberHouse] = useState(lastnum)

    const dispatch = useDispatch()
    const house = useSelector<AppRootStateType, Array<HouseType>>(state => state.houses)
    const floors = useSelector<AppRootStateType, any>(state => state.floor)
    const newHouseId = v1()

    function num() {
        setnumberHouse(numberHouse + 1)
    }

    const addHouseHandler = useCallback(() => {
        num()
        dispatch(addHouseAC(newHouseId, numberHouse))
        dispatch(addFloorAC(newHouseId, 'white', 1, true))
    }, [newHouseId, numberHouse])

    return (
        <div className={s.App}>
            <header className={s.header}>
                City Byilder
            </header>

            <div className={s.body}>
                <div className={s.controlsWrapper}>
                    <div className={s.title}>
                        Houses List
                    </div>
                    <div className={s.controls}>
                        {house.map((c, count) => {

                            return <Controls key={c.houseID} houseNumber={c.houseNumber} housenumber={count + 1}
                                             houseID={c.houseID}/>
                        })}


                    </div>
                    <div className={s.footerControls}>
                        <button onClick={addHouseHandler}>Build new house</button>
                    </div>
                </div>
                <div className={s.placeForHouses}>
                    {house.map(h => {
                        let f = floors[h.houseID]


                        return <House f={f} houseNumber={h.houseNumber} key={h.houseID}/>


                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
