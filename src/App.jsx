import './App.css'
import Desktop from "./Components/Desktop/index.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PasswordEntry from "./Components/PasswordEntry/index.jsx";
import Welcome from "./Components/Welcome/index.jsx";
import UserSelector from "./Components/UserSelector/index.jsx";
import Clock from "./Components/Clock/index.jsx";

function App() {

  return (
      <div>
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Welcome/>}/>
            <Route path={"/userSelector"} element={<UserSelector/>}/>
            <Route path={"/passwordEntry"} element={<PasswordEntry />}/>
            <Route path={"/desktop"} element={<Desktop />}/>
        </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
