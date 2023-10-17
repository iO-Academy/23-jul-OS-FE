import './Welcome.css'
import StandardButton from "../StandardButton/index.jsx";

const Welcome = () => {
    return (
        <>
            <div className = "flex justify-center flex-wrap flex-col content-center mt-10">
                <p>Welcome to</p>
                <p>CaterPillar OS</p>
                <container className="WelcomeCircle mt-10 rounded-full bg-green-900 bg-opacity-45 mt-0 z-10 flex justify-center flex-wrap flex-col content-center">
                    <div className="littleCircle rounded-full bg-emerald-700 mt-20 flex justify-center">
                        <StandardButton text ={'Enter'}/>
                    </div>
                </container>
            </div>
        </>
    )
}

export default Welcome