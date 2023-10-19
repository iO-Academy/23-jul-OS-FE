import {AiFillGithub} from "react-icons/ai";

const AboutPage = () => {
    return (
        <>
            <div className="p-5">
                Welcome to Caterpillar OS. This is a browser-based operating system that the team has built during our final week of iO Academy. The OS was primarily built on the front-end using React-based JavaScript and styled using Tailwind CSS, however we have included some back-end features using PHP to perform tasks such as recognizing and storing login information in addition to extracting data from an API we have built using an SQL database.
            </div>
            <div className="p-5">
                <p>Here is a list of all the tools we have used in order to work on this project:</p>
                <p>React v18.2.0, using Vite as our React compiler</p>
                <p>Tailwind v3.3.3</p>
                <p>PHP v8.2.0 (using LAMP as our software stack)</p>
                <p>Slim v4.12.0</p>
                <p>IDE - PHPStorm</p>
            </div>
            <div className="p-5">
                <p>Links to GitHub repositories:</p>
                <div className="flex flex-wrap">
                    <a className="underline text-blue-800" href="https://github.com/iO-Academy/23-jul-OS-BE">Back-end</a><br />
                </div>
                <div className="flex flex-wrap">
                    <a className="underline text-blue-800" href="https://github.com/iO-Academy/23-jul-OS-FE">Front-end</a>
                </div>
            </div>
            <div className="p-5">
                <p>Contributors:</p>
                <p className="flex flex-wrap">Colin Meier <a className="pl-2" href="https://github.com/CMeier556"><AiFillGithub /></a></p>
                <p className="flex flex-wrap">Joshua Bryan <a className="pl-2" href="https://github.com/Joshsilas"><AiFillGithub /></a></p>
                <p className="flex flex-wrap">Alex Mansfield <a className="pl-2" href="https://github.com/alexjames4"><AiFillGithub /></a></p>
                <p className="flex flex-wrap">Cosmin Darius <a className="pl-2" href="https://github.com/CosminDarius1"><AiFillGithub /></a></p>
            </div>
        </>
    )
}

export default AboutPage