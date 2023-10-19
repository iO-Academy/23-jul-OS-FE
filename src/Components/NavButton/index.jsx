const NavButton = ({text, name, handleClick}) => {
    return (
        <button onClick={handleClick} > {text} {name} </button>
    )
}

export default NavButton