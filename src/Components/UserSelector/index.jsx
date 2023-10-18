import './UserSelector.css'
import StandardButton from "../StandardButton/index.jsx";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Desktop from "../Desktop/index.jsx";

const UserSelector = ({username, icon, visible, passWordInput, openProgram, activeProgram}) => {
    //
    // const handleClick = () => {
    //     console.log('button clicked')
    // }

    const [users, setUsers] = useState(false)
    const [user, setUser] = useState()

    const getAllUsers = async () => {
        let response = await fetch ('http://0.0.0.0:8080/users/')
        let usersData = await response.json()
        setUsers(usersData.data)
    }

    useEffect(() => {
        getAllUsers()
    }, []);

    const userLocations = [
        {userName: username, location: 'animatedCircleLeft', horizontal: 'left', vertical: 'top'},
        {location: 'animatedCircleLeft', horizontal: 'left', vertical: 'bottom'},
        {location: 'animatedCircleRight', horizontal: 'right', vertical: 'top'},
        {location: 'animatedCircleRight', horizontal: 'right', vertical: 'bottom'},
    ]
    const createUserNameArray = () => {
        return users.map(user => {
            return <div className= "getUserButton border-2 border-black rounded-full bg-emerald-700 flex justify-center" key={user.id}>
        <StandardButton
            key={user.id}
            text={user.username}
            onClick={passWordInput} />
            </div>
            })
    }

    return (
        <>
        <div className ='movingButtonsBottomToTop flex justify-center'>{users && createUserNameArray(userLocations)} </div>
        <div className = "flex justify-center flex-wrap flex-col content-center">
            <container className="WelcomeCircle rounded-full bg-green-900 bg-opacity-45 mt-20 z-10 flex justify-center flex-wrap content-center">
                <p className='mt-10'>Please select user</p>
                <p>or log in as guest</p>
                <div className="getProgramButton rounded-full bg-emerald-700 flex justify-center">
                    <Link className='flex justify-center' to={"/desktop"}><StandardButton text ={'Guest'}/></Link>
                </div>
            </container>
            </div>
</>
    )
}

export default UserSelector


// const getUser = async (id) => {
//     let response = await fetch (`http://0.0.0.0:8080/users/${id}`)
//     let userData = await response.json()
//     setUser(userData)
// }

// const users = [
//     {name: 'user.username',  location: 'animatedCircleLeft', horizontal: 'left', vertical: 'top'},
//     {name: 'user.username',  location: 'animatedCircleLeft', horizontal: 'left', vertical: 'bottom'},
//     {name: 'user.username',  location: 'animatedCircleRight', horizontal: 'right', vertical: 'top'},
//     {name: 'user.username',  location: 'animatedCircleRight', horizontal: 'right', vertical: 'bottom'},
// ]

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

// const getUser = async (id) => {
//     let response = await fetch (`http://0.0.0.0:8080/users/${id}`)
//     let userData = await response.json()
//     setUser(userData)
// }