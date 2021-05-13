import s from './Door.module.scss'
type PropsType={
    houseNumber:number
}
function Door({houseNumber}:PropsType) {
    return (

        <div className={s.door}>
           House№ <div className={s.number} >{houseNumber}</div>
        </div>
    );
}

export default Door;
