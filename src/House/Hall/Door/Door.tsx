import s from './Door.module.scss'
import React from "react";
type PropsType={
    houseNumber:number
}


const Door=React.memo(function ({houseNumber}:PropsType) {
    return (

        <div className={s.door}>
           House№ <div className={s.number} >{houseNumber}</div>
        </div>
    );
})


// function Door({houseNumber}:PropsType) {
//     return (
//
//         <div className={s.door}>
//            House№ <div className={s.number} >{houseNumber}</div>
//         </div>
//     );
// }

export default Door;
