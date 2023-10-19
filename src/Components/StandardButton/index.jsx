
const StandardButton = ({text, handleClick, className}) => {

    return (
        <>
            <button className={className} onClick={handleClick} >{text}</button>
        </>
    )
}

export default StandardButton