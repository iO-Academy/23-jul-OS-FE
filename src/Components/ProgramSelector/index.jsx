import './ProgramSelector.css'
import StandardButton from "../StandardButton/index.jsx";

const ProgramSelector = () => {
    return (
    <div className = "flex justify-center">
        <container className="circle rounded-full bg-green-900 bg-opacity-45 mt-0 z-10 flex justify-center flex-wrap flex-col content-center">
            <div className ="text-center mt-5">Welcome</div>
            <div className ="text-center mt-5">User</div>
            <div className ="bg-red-800 text-center mt-5">User Icon</div>
            <div className= "littleCircle rounded-full bg-emerald-700 mt-20 flex justify-center">
                <StandardButton text ={'Open'}/>
            </div>
        </container>
        <div className="littleCircleLeft border-2 border-black absolute left-24 top-2 rounded-full bg-emerald-700 flex justify-center">
        <StandardButton text ={'About'}/>
        </div>
        <div className="littleCircleLeft border-2 border-black absolute left-24 bottom-2 rounded-full bg-emerald-700 flex justify-center">
            <StandardButton text ={'Theme'}/>
        </div>
        <div className="littleCircleRight border-2 border-black absolute right-24 top-2 rounded-full bg-emerald-700 flex justify-center ">
            <StandardButton text ={'Game'}/>
        </div>
        <div className="littleCircleRight border-2 border-black absolute right-24 bottom-2 rounded-full bg-emerald-700 flex justify-center">
            <StandardButton text ={'Giphy Machine'}/>
        </div>

    </div>
    )
}

export default ProgramSelector

