import StandardButton from "../StandardButton/index.jsx";

const UserSelect = () => {
    return (
        <>
            <div className = "flex justify-center flex-wrap flex-col content-center mt-20">
                <container className="WelcomeCircle rounded-full bg-green-900 bg-opacity-45 mt-20 z-10 flex justify-center flex-wrap flex-col content-center">
                    <div className="littleCircle rounded-full bg-emerald-700 mt-20 flex justify-center">
                        <StandardButton text ={'User Select'}/>
                    </div>
                </container>
            </div>
        </>
    )
}

export default UserSelect