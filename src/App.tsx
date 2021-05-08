import s from './App.module.scss';
import House from "./House/House";

function App() {
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
                        <div>house</div>
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
                    <House/>

                </div>


            </div>


        </div>
    );
}

export default App;
