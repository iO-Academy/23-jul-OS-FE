import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Welcome from "../Welcome/index.jsx";

const WaitingRoom = () => {
    return (
        <div className={"min-h-screen bg-green-600 text-center text-color-black mt-0 text-3xl pt-10"}>
            <BrowserRouter>
                <Link to={"Welcome"}>Welcome</Link>
                <Routes>
                    <Route path={"/welcome"} element={<Welcome/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default WaitingRoom