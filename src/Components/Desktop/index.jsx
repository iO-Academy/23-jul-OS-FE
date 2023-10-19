import ProgramSelector from "../ProgramSelector/index.jsx";
import './Desktop.css'
import {useState} from "react";

const Desktop = () => {

    const [showButtons, setShowButtons] = useState(false)

    const openMenu = () => {
        if (showButtons === false) {
            setShowButtons(true)
        } else {
            setShowButtons(false)
        }
    }

    return (
        <>
                <div className={showButtons ? "min-h-screen bg-green-600 text-center text-color-black mt-0 pt-10 blur-2xl" : "min-h-screen bg-green-600 text-center text-color-black mt-0 pt-10"}>
                </div>
                <div className="welcomeCircle z-10 fixed top-10 left-0 right-0 text-3xl">
                    <ProgramSelector username={"user"} icon={"Icon Here"} visible={showButtons} openMenu={openMenu}/>
                </div>
        </>
    )
}

export default Desktop