const AboutPage = () => {
    return (
        <>
            <p>
                Welcome to Caterpillar OS. This is a browser-based operating system that the team has built during our final week of iO Academy. The OS was primarily built on the front-end using React-based JavaScript and styled using Tailwind CSS, however we have included some back-end features using PHP to perform tasks such as recognizing and storing login information in addition to extracting data from an API we have built using an SQL database.
            </p>
            <br/>
            <ul>
                <p>Here is a list of all the tools we have used in order to work on this project:</p>
                <li>React v18.2.0, using Vite as our React compiler</li>
                <li>Tailwind v3.3.3</li>
                <li>PHP v8.2.0 (using LAMP as our software stack)</li>
                <li>Slim v4.12.0</li>
                <li>IDE - PHPStorm</li>
            </ul>
            <br />
            <p>Links to GitHub repositories:</p>
            <a className="underline text-blue-800" href="https://github.com/iO-Academy/23-jul-OS-BE">Back-end</a>
            <a className="underline text-blue-800" href="https://github.com/iO-Academy/23-jul-OS-FE">Front-end</a>
            <br />
            <p>Contributors:</p>
            <p>Colin Meier</p>
            <p>Joshua Bryan</p>
            <p>Alex Mansfield</p>
            <p>Cosmin Darius</p>
        </>
    )
}

export default AboutPage