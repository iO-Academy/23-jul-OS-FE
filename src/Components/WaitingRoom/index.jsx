import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Welcome from "../Welcome/index.jsx";
import UserSelect from "../UserSelect/index.jsx";
import PasswordEntry from "../PasswordEntry/index.jsx";
import UserSelector from "../UserSelector/index.jsx";
import Desktop from "../Desktop/index.jsx";

const WaitingRoom = () => {
    return (
        <div className={"min-h-screen bg-green-600 text-center text-color-black mt-0 text-3xl pt-10"}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Welcome/>}/>
                    <Route path={"/userSelector"} element={<UserSelector/>}/>
                    <Route path={"/userSelect"} element={<UserSelect/>}/>
                    <Route path={"/passwordEntry"} element={<PasswordEntry />}/>
                    <Route path={"/desktop"} element={<Desktop />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default WaitingRoom