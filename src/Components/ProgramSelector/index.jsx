import './ProgramSelector.css'
import StandardButton from "../StandardButton/index.jsx";
import {useState} from "react";

const ProgramSelector = ({username, icon, visible, openMenu, openProgram, activeProgram}) => {

    const handleClick = () => {
        console.log('button clicked')
    }

    return (
    <div className="flex justify-center">
        <div className="circle rounded-full bg-green-900 bg-opacity-45 mt-0 z-10 flex justify-center flex-wrap flex-col content-center">
            <div className="text-center mt-5">Welcome</div>
            <div className="text-center mt-5">{username}</div>
            <div className="bg-red-800 text-center mt-5">{icon}</div>
            <div className="littleCircle rounded-full bg-emerald-700 mt-20 flex justify-center">
                <StandardButton text={visible ? 'Close' : 'Open'} handleClick={openMenu}/>
            </div>
        </div>
        <div className={visible ? "animatedCircleLeft border-2 border-black absolute left-24 top-2 rounded-full bg-emerald-700 flex justify-center" : "littleCircleLeft border-2 border-black absolute left-24 top-2 rounded-full bg-emerald-700 flex justify-center"}>
            <StandardButton text={'About'} handleClick={handleClick}/>
        </div>
        <div className={visible ? "animatedCircleLeft border-2 border-black absolute left-24 bottom-2 rounded-full bg-emerald-700 flex justify-center" : "littleCircleLeft border-2 border-black absolute left-24 bottom-2 rounded-full bg-emerald-700 flex justify-center"}>
            <StandardButton text={'Theme'} handleClick={handleClick}/>
        </div>
        <div className={visible ? "animatedCircleRight border-2 border-black absolute right-24 top-2 rounded-full bg-emerald-700 flex justify-center" : "littleCircleRight border-2 border-black absolute right-24 top-2 rounded-full bg-emerald-700 flex justify-center"}>
            <StandardButton text={'Game'} handleClick={handleClick}/>
        </div>
        <div className={visible ? "animatedCircleRight border-2 border-black absolute right-24 bottom-2 rounded-full bg-emerald-700 flex justify-center" : "littleCircleRight border-2 border-black absolute right-24 bottom-2 rounded-full bg-emerald-700 flex justify-center"}>
            <StandardButton text={'Giphy Machine'} handleClick={handleClick}/>
        </div>
    </div>
    )
}

export default ProgramSelector

