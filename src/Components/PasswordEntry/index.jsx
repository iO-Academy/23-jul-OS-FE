import PasswordInput from "../PasswordInput/index.jsx";
import StandardButton from "../StandardButton/index.jsx";
import {useEffect} from "react";
import {redirect} from "react-router-dom";


const PasswordValidation = ({enteredPassword, userId}) => {

    const checkPassword = async () => {
         const response = await fetch (`http://localhost:8080/checkPassword`,
             {
                 method: 'POST',
                 body: JSON.stringify({user:userId, password:enteredPassword})
             })
        const data = await response.json()
        if (data.success) {
            return redirect("/desktop")
        }
        return null;
    }

    return (
        <>
            {/*<div>{username}</div>*/}
            <div>Enter Password</div>
            <PasswordInput/>
            <div>
                <StandardButton text={"Submit"} onClick={checkPassword}/>
                <StandardButton text={"Go Back"}/>
            </div>
        </>
    )
}

export default PasswordValidation