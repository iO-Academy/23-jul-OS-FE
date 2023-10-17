import './ProgramContainer.css'
import Draggable from "react-draggable";

const ProgramContainer = ({toggleProgram, text}) => {
    return (
        <Draggable handle="header">
            <div className="program resize overflow-auto ">
                <header className="header h-16">
                    <span className="text-2xl">Program</span>
                    <span className="close-btn absolute top-2 right-2" onClick={() => toggleProgram(false)}>Close</span>
                </header>
                <div className="program-content my-10 mx-20 h-auto">Content</div>
            </div>
        </Draggable>
    )
}

export default ProgramContainer