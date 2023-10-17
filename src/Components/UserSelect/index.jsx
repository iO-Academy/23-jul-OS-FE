import StandardButton from "../StandardButton/index.jsx";
import {useState} from "react";

const UserSelect = () => {

    const [users, setUsers] = useState()
    const [user, setUser] = useState()
    const getAllUsers= async () => {
        let response = await fetch ('http://0.0.0.0:8080/users/')
        let usersData = await response.json()
        setUsers(usersData)
    }

    const getUser = async (id) => {
        let response = await fetch (`http://0.0.0.0:8080/users/${id}`)
        let userData = await response.json()
        setUser(userData)
    }

    return (
        <>
                        <StandardButton text ={'User Select'} handleClick={getAllUsers}/>
        </>
    )
}

export default UserSelect