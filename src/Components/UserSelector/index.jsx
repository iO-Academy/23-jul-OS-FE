import './UserSelector.css'
import StandardButton from "../StandardButton/index.jsx";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const UserSelector = ({username, icon, visible, openMenu, openProgram, activeProgram}) => {

    // const handleClick = () => {
    // //     console.log('button clicked')
    // // }
    //
    // const [users, setUsers] = useState()
    // const [user, setUser] = useState()
    // const getAllUsers = async () => {
    //     let response = await fetch ('http://0.0.0.0:8080/users/')
    //     let usersData = await response.json()
    //     setUsers(usersData.data)
    // }
    //
    // // const getUser = async (id) => {
    // //     let response = await fetch (`http://0.0.0.0:8080/users/${id}`)
    // //     let userData = await response.json()
    // //     setUser(userData)
    // // }
    //
    // useEffect(() => {
    //     getAllUsers()
    // }, []);
    //
    // const createUserNameArray = () => {
    //     return users.map(user => {
    //         return <div key={user.username}>{user.username}</div>
    //     })
    // }
    //
    //
    //
    // // const programs = [
    // //     {name: 'About',  location: 'animatedCircleLeft', horizontal: 'left', vertical: 'top'},
    // //     {name: 'Theme',  location: 'animatedCircleLeft', horizontal: 'left', vertical: 'bottom'},
    // //     {name: 'Game',  location: 'animatedCircleRight', horizontal: 'right', vertical: 'top'},
    // //     {name: 'Giphy Machiney',  location: 'animatedCircleRight', horizontal: 'right', vertical: 'bottom'},
    // // ]
    //
    // const generateButtons = (array) => {
    //     return array.map(item => {
    //         return <div className={visible ? item.location + " border-2 border-black absolute " + item.horizontal + "-24 " + item.vertical + "-2 rounded-full bg-emerald-700 flex justify-center" : "littleCircle border-2 border-black absolute " + item.horizontal + "-24 " + item.vertical + "2 rounded-full bg-emerald-700 flex justify-center"} key={item.name}>
    //             <StandardButton
    //                 key={item.name}
    //                 text={item.name}
    //                 handleClick={openMenu}/>
    //         </div>
    //     })
    // }

    return (
        <div className = "flex justify-center flex-wrap flex-col content-center mt-20">
            <container className="WelcomeCircle rounded-full bg-green-900 bg-opacity-45 mt-20 z-10 flex justify-center flex-wrap content-center">
                <p className='mt-10'>Please select user</p>
                <p>or log in as guest</p>
                <div className="getProgramButton rounded-full bg-emerald-700 flex justify-center">
                    <Link className='flex justify-center' to={"Desktop"} ><StandardButton text ={'Guest'}/></Link>
                </div>
            </container>
                {/*{users && createUserNameArray()}*/}
            </div>
    )


}

export default UserSelector

