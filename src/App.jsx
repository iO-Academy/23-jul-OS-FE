import './App.css'
import Desktop from "./Components/Desktop/index.jsx";
import WaitingRoom from "./Components/WaitingRoom/index.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PasswordEntry from "./Components/PasswordEntry/index.jsx";
import Welcome from "./Components/Welcome/index.jsx";
import UserSelector from "./Components/UserSelector/index.jsx";
import UserSelect from "./Components/UserSelect/index.jsx";

function App() {


  return (
      <div className={"min-h-screen bg-green-600 text-center text-color-black mt-0 text-3xl pt-10"}>
        {/*<WaitingRoom />*/}
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

export default App
