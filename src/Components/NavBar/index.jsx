import NavButton from "../NavButton/index.jsx";
import Clock from "../Clock/index.jsx";
import {Link} from "react-router-dom";


const NavBar = ({openMenu}) => {

    return (
        <div className="fixed w-full bg-purple-100 flex justify-between px-5 py-2 text-xl">
            <Link to={"/"}><NavButton text="Logout" /> </Link>
                <div className='flex ml-10'>
            <NavButton text="Menu" handleClick={openMenu} />
        </div>
            <Clock />
        </div>
    )
}

export default NavBar

