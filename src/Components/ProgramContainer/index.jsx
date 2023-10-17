import './ProgramContainer.css'
import Draggable from "react-draggable";

const ProgramContainer = ({toggleProgram}) => {
    return (
        <Draggable>
                <div className="program">
                    <div className="program-content">
                        <header>
                            <div className="close">
                                <span className="close-btn" onClick={() => toggleProgram(false)}>Close</span>
                            </div>
                            <h1>Program</h1>
                        </header>
                        <body>
                        <p>Content</p>
                        </body>
                    </div>
                </div>
        </Draggable>
    )
}






//     return (
//         <Popup trigger={<button>Open</button>}>
//                 <div className={"border-2 border-black"}>
//                     <div className={"bg-green-700 flex justify-between p-5 text-2xl"}>
//                         Program Name
//                         <button className={"border-2 border-black"}>Close</button>
//                     </div>
//                     <div className={"h-96 bg-green-400"}>
//                         <div>
//                         </div>
//                     </div>
//                 </div>
//         </Popup>
//     )
// }

export default ProgramContainer