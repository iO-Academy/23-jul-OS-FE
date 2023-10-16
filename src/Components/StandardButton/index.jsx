const StandardButton = ({text, handleClick, hasBeenClicked}) => {

    return (
        <>
            <button className={'button' + (hasBeenClicked ? ' clicked' : '')} onClick={handleClick} >{text}</button>
        </>
    )
}

export default StandardButton