import StandardButton from "../StandardButton/index.jsx";
import {useState} from "react";

const UserSelect = () => {

    const [users, setUsers] = useState()
    const getAllUsers= async () => {
        let response = await fetch ('http://0.0.0.0:8080/users/')
        let usersData = await response.json()
        setUsers(usersData)
    }

    return (
        <>
            <div className = "flex justify-center flex-wrap flex-col content-center mt-20">
                <container className="WelcomeCircle rounded-full bg-green-900 bg-opacity-45 mt-20 z-10 flex justify-center flex-wrap flex-col content-center">
                    <div className="littleCircle rounded-full bg-emerald-700 mt-20 flex justify-center">
                        <StandardButton text ={'User Select'} handleClick={getAllUsers}/>
                    </div>
                </container>
            </div>
        </>
    )
}

export default UserSelect