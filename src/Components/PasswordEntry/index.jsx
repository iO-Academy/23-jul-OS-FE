import PasswordInput from "../PasswordInput/index.jsx";
import StandardButton from "../StandardButton/index.jsx";

const PasswordEntry = ({username}) => {
    return (
        <>
            <div>{username}</div>
            <div>Enter Password</div>
            <PasswordInput/>
            <div>
                <StandardButton text={"Submit"}/>
                <StandardButton text={"Go Back"}/>
            </div>
        </>
    )
}

export default PasswordEntry