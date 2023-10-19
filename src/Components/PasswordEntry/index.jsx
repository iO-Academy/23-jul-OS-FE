import PasswordInput from "../PasswordInput/index.jsx";
import {useEffect, useState} from "react";
import {redirect} from "react-router-dom";
import '../../App.css';
import StandardButton from "../StandardButton/index.jsx";
import './PasswordEntry.css';

const PasswordEntry = ({enteredPassword, userId}) => {
    const [passwordMatch, setPasswordMatch] = useState()
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
    const [user, setUser] = useState()
    const getUser = async (id) => {
        let response = await fetch (`http://0.0.0.0:8080/users/${id}`)
        let userData = await response.json()
        setUser(userData)
    }
    useEffect(() => {
        getUser(user)
    }, [user]);

    return (
    <>
        <div className="flex flex-col items-center mb-1">
            <div>Select Login</div>
            <div className="littleCirclePassword flex justify-center flex-wrap content-center rounded-full bg-white mt-2 mb-0 ">
                {user && getUser(user)}
            </div>
        </div>
        <div className = "flex justify-center flex-wrap flex-col content-center mt-0">
            <container className="PasswordCircle rounded-full bg-green-900 bg-opacity-45 mt-10 z-10 flex justify-center flex-wrap content-center">
            <div>Enter Password</div>
                <div>
                        {
                            !passwordMatch ? 'Password does not match db' : ''
                        }
                </div>
                <PasswordInput/>
                    <div className="flex flex-wrap flex-row justify-between">
                        <div className="littleCirclePassword rounded-full bg-emerald-700 mt-10 m-6 flex justify-center">
                            <StandardButton text={"Submit"} onClick={checkPassword}/>
                        </div>
                        <div className="littleCirclePassword rounded-full bg-red-400 mt-10 m-6 flex justify-center">
                            <StandardButton className="littleCircleRight"text={"Go Back"}/>
                        </div>
                    </div>
            </container>
        </div>
    </>
    )
}

export default PasswordEntry