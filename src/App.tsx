import s from './App.module.scss';
import House from "./House/House";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {addHouseAC, HouseType,} from "./state/houses-reducer";
import Controls from "./Controls/Controls";
import {v1} from "uuid";
import {addFloorAC} from "./state/floor-reducer";
import { useEffect,  useState} from "react";
import houseicon from "./icon/3643769-building-home-house-main-menu-start_113416.svg";
import styled from "styled-components";
const Iconwrapper = styled.div`
  margin: 3px;
  background-image: url(${houseicon});
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center;
`
function App() {
    const lastnum = useSelector<AppRootStateType, number>(state => state.houses[state.houses.length-1]?state.houses[state.houses.length-1].houseNumber:1)

    useEffect(() => {
        setnumberHouse((lastnum))
    }, [])

    const [numberHouse, setnumberHouse] = useState(lastnum)

    const dispatch = useDispatch()
    const house = useSelector<AppRootStateType, Array<HouseType>>(state => state.houses)
    const floors = useSelector<AppRootStateType, any>(state => state.floor)
    const newHouseId = v1()
const floorId=v1()
    function num() {
        setnumberHouse(numberHouse + 1)
    }

    const addHouseHandler = () => {
        num()
        dispatch(addHouseAC(newHouseId, numberHouse))
        dispatch(addFloorAC(newHouseId, 'white', 1, true,floorId))
    }

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
                        {house.map((c) => {

                            return <Controls key={c.houseID} houseNumber={c.houseNumber}
                                             houseID={c.houseID}/>
                        })}


                    </div>
                    <div className={s.footerControls}>
                        <button onClick={addHouseHandler}><Iconwrapper></Iconwrapper>Build new house</button>
                    </div>
                </div>
                <div className={s.placeForHouses}>
                    {house.map(h => {
                        let f = floors[h.houseID]


                        return <House key={h.houseID} f={f} houseNumber={h.houseNumber} />


                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
