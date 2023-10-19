import PasswordInput from "../PasswordInput/index.jsx";
import {useEffect, useState} from "react";
import {Link, redirect, useLocation} from "react-router-dom";
import '../../App.css';
import StandardButton from "../StandardButton/index.jsx";
import './PasswordEntry.css';
import NavButton from "../NavButton/index.jsx";

const PasswordEntry = ({enteredPassword, userId}) => {
    const [passwordMatch, setPasswordMatch] = useState()
    const {state} = useLocation();
    const checkPassword = async () => {
         const response = await fetch (`http://localhost:8080/checkPassword`,
             {
                 method: 'POST',
                 body: JSON.stringify({user:userId, password:enteredPassword})
             })
        const data = await response.json()
        if (data.passwordMatch) {
            redirect('/desktop')
        } else {
            setPasswordMatch(false)
        }
    }
    // const [user, setUser] = useState()
    // const getUser = async (id) => {
    //     let response = await fetch (`http://0.0.0.0:8080/users/${id}`)
    //     let userData = await response.json()
    //     setUser(userData)
    // }
    // useEffect(() => {
    //     getUser(user)
    // }, [user]);

    return (
    <>
        <div className={"min-h-screen bg-green-600 text-center text-color-black mt-0 text-3xl pt-10"}>
            <div className="flex flex-col items-center mb-1">
            <div>Select Login</div>
            <div className="littleCirclePassword flex justify-center flex-wrap content-center rounded-full bg-white mt-2 mb-0 ">
                {state.username}
            </div>
        </div>
        <div className = "flex justify-center flex-wrap flex-col content-center mt-0">
            <container className="PasswordCircle rounded-full bg-green-900 bg-opacity-45 mt-10 z-10 flex justify-center flex-wrap content-center">
            <div>Enter Password</div>
                <PasswordInput/>
                    <div className="flex flex-wrap flex-row justify-between">
                        <div className="littleCirclePassword rounded-full bg-emerald-700 mt-10 m-6 flex justify-center">
                            <Link to="/desktop"><StandardButton className="littleCirclePassword" text={"Submit"} handleClick={checkPassword}/></Link>
                        </div>
                        <div className="littleCirclePassword rounded-full bg-red-400 mt-10 m-6 flex justify-center">
                            <Link to={"/"}><StandardButton className="littleCirclePassword" text={"Go Back"}/></Link>
                        </div>
                    </div>
            </container>
            </div>
        </div>
    </>
    )
}

export default PasswordEntry