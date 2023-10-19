import './ProgramContainer.css'
import Draggable from "react-draggable";
import AboutPage from "../AboutPage/index.jsx";
import {GrClose} from "react-icons/gr";

const ProgramContainer = ({toggleProgram, text, children}) => {
    return (
        <Draggable handle="header" bounds={{top: -100, left: -100, bottom: 75, right: 300}}>
            <div className="program resize overflow-auto rounded-md">
                <header className="header h-16 bg-green-700 pt-4 text-center">
                    <span className="text-3xl">{text}</span>
                </header>
                <span className="close-btn absolute top-2 right-2" onClick={() => toggleProgram(false)}><GrClose /></span>
                <div className="program-content my-10 mx-20 p-5 h-auto">
                    {children}
                </div>
            </div>
        </Draggable>
    )
}

export default ProgramContainer