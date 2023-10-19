
import StandardButton from "../StandardButton/index.jsx";
import {useState} from "react";

const ProgramSelector = ({username, icon, visible, openMenu, openProgram, activeProgram, userName}) => {

    const programs = [
        {name: 'About',  location: 'animatedCircleLeft', horizontal: 'left', vertical: 'top'},
        {name: 'Theme',  location: 'animatedCircleLeft', horizontal: 'left', vertical: 'bottom'},
        {name: 'Game',  location: 'animatedCircleRight', horizontal: 'right', vertical: 'top'},
        {name: 'Giphy Machiney', location: 'animatedCircleRight', horizontal: 'right', vertical: 'bottom'},
    ]

    const generateButtons = (array) => {
        return array.map(item => {
            return <div className={visible ? item.location + " border-2 border-black absolute " + item.horizontal + "-24 " + item.vertical + "-4 rounded-full bg-emerald-700 flex justify-center" : "littleCircle border-2 border-black absolute " + item.horizontal + "-24 " + item.vertical + "2 rounded-full bg-emerald-700 flex justify-center"} key={item.name}>
                <StandardButton
                    key={item.name}
                    text={item.name}
                    handleClick={openMenu}/>
            </div>
        })
    }

    return (
            <div className="flex justify-center">
                <div className="circle rounded-full bg-green-900 bg-opacity-45 mt-0 z-10 flex justify-center flex-wrap flex-col content-center">
                    <div className="text-center mt-5">Welcome</div>
                    <div className="text-center mt-5">{username}</div>
                    <div className="bg-red-800 text-center mt-5">{icon}</div>
                    <div className="getProgramButton rounded-full bg-emerald-700 mt-20 flex justify-center">
                        <StandardButton text={visible ? 'Close' : 'Open'} handleClick={openMenu}/>
                    </div>
                </div>
                {generateButtons(programs)}
            </div>
    )
}

export default ProgramSelector

