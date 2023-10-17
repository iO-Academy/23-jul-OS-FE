
const StandardButton = ({text, handleClick}) => {

    return (
        <>
            <button onClick={handleClick} >{text}</button>
        </>
    )
}

export default StandardButton