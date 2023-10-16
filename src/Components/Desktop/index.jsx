import ProgramSelector from "../ProgramSelector/index.jsx";
import WallpaperCircle from "../WallpaperCircle/index.jsx";
const Desktop = () => {
    return (
        <div className={"min-h-screen bg-green-600 text-center text-color-black mt-0 text-3xl pt-10"}>
            {/*<WallpaperCircle />*/}
            <div className ="z-10 fixed top-10 left-0 right-0"><ProgramSelector /> </div>
        </div>
    )
}


export default Desktop