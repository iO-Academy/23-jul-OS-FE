import PasswordInput from "../PasswordInput/index.jsx";
import StandardButton from "../StandardButton/index.jsx";
import {useEffect, useState} from "react";
import {redirect} from "react-router-dom";


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

    return (
        <>
            {/*<div>{username}</div>*/}
            <div>Enter Password</div>
            <div>
                {
                    !passwordMatch ? 'Password does not match db' : ''
                }
            </div>
            <PasswordInput/>
            <div>
                <StandardButton text={"Submit"} onClick={checkPassword}/>
                <StandardButton text={"Go Back"}/>
            </div>
        </>
    )
}

export default PasswordEntry