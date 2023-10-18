import './ProgramContainer.css'
import Draggable from "react-draggable";
import AboutPage from "../AboutPage/index.jsx";

const ProgramContainer = ({toggleProgram, text, children}) => {
    return (
        <Draggable handle="header">
            <div className="program resize overflow-auto">
                <header className="header h-16 bg-green-700 text-center">
                    <span className="text-3xl">{text}</span>
                    <span className="close-btn absolute top-2 right-2" onClick={() => toggleProgram(false)}>Close</span>
                </header>
                <div className="program-content my-10 mx-20 p-5 h-auto"><AboutPage /></div>
            </div>
        </Draggable>
    )
}

export default ProgramContainer