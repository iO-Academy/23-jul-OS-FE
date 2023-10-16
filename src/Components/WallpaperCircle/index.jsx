import StandardButton from "../StandardButton/index.jsx";

const WallpaperCircle = () => {
    return (

        <div className = "flex justify-center">
            <container className="circle rounded-full bg-green-900 bg-opacity-45 mt-0 z-10 flex justify-center flex-wrap flex-col content-center">
                <div className ="text-center mt-5">Welcome</div>
                <div className ="text-center mt-5">User</div>
                <div className ="bg-red-800 text-center mt-5">User Icon</div>
                <div className= "littleCircle rounded-full bg-emerald-700 mt-20 flex justify-center">
                    <StandardButton text ={'Open'}/>
                </div>
            </container>
        </div>
    )
}

export default WallpaperCircle