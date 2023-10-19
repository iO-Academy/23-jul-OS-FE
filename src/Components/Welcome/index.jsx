
import './../../App.css'
import StandardButton from "../StandardButton/index.jsx";
import {Link} from "react-router-dom";

const Welcome = () => {
    const handleClick = () => {
    }

    return (
        <div className={"min-h-screen bg-green-600 text-center text-color-black mt-0 text-3xl pt-10"}>
            <div className = "flex justify-center flex-wrap flex-col content-center mt-10">
                <p>Welcome to</p>
                <p>Caterpillar OS</p>
                <div className="WelcomeCircle mt-10 rounded-full bg-green-900 bg-opacity-45 z-10 flex justify-center flex-wrap flex-col content-center">
                    <div className="getProgramButton rounded-full bg-emerald-700 mt-20 flex justify-center">
                        <Link className='flex justify-center' to={"/userSelector"}><StandardButton text ={'Enter'} onClick={handleClick} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome