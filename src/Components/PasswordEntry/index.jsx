import PasswordInput from "../PasswordInput/index.jsx";
import StandardButton from "../StandardButton/index.jsx";
import {useEffect} from "react";


const PasswordValidation = ({enteredPassword, userId}) => {

    const checkPassword = async () => {
         await fetch (`http://localhost:8080/checkPassword`,
             {
                 method: 'POST',
                 body: JSON.stringify({user:userId, password:enteredPassword})
             })
    }

    useEffect(() => {
        checkPassword().catch('Unexpected error ocurred!')
    }, []);

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