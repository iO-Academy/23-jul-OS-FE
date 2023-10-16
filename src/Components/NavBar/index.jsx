import NavButton from "../NavButton/index.jsx";
import Clock from "../Clock/index.jsx";

const NavBar = () => {

    return (
        <div className={"bg-purple-100 flex justify-between px-5 py-2 text-2xl"}>
            <NavButton text="Logout" />
            <NavButton text="Menu" />
            <Clock />
        </div>
    )
}

export default NavBar