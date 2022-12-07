import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Projects = () => {
    return (
        <>
        <div className='container projects-page'>
            <div className='text-zone-projects'>
                <h1>
                    <AnimatedLetters
                        strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        idx={15}
                    />
                </h1>
                
                <p>
                    Title: "Pet Shelter App"
                    <br />
                    Languages/Database: ReactJS with MongoDB
                    <br />
                    Description: A full stack app where you can add/edit/delete/view pets to a generic pet shelter. 
                    <br />
                    Link to hosted AWS site <a href="http://54.219.194.228/">here</a>. 
                </p>
                <p>
                    Title: "Job Tracker App"
                    <br />
                    Languages/Database: ReactJS with MongoDB
                    <br />
                    Description: A  full stack app where I collaborated with 2 fellow colleagues where you can add/edit/delete/view jobs and track their status. 
                    <br />
                    Link to GitHub repo <a href="https://github.com/somebunnycodes/job_tracker">here</a>. 
                </p>
                <p>
                    Title: "Playlist Hero"
                    <br />
                    Languages/Database: Python/Flask with SQL
                    <br /> 
                    Description: A full stack app where you can add/edit/delete/view playlists from an outside source. 
                    <br />
                    Link to GitHub repo <a href="https://github.com/BenRanithy/PlaylistHero">here</a>. 
                </p>
                <p>
                    Title: "JvZ"
                    <br />
                    Editing Software: Adobe Premiere
                    <br />
                    Description: A short animated film I made for a 4d art class project. 
                    <br />
                    Link to YouTube channel <a href="https://youtu.be/owK8c6eFIo8">here</a>.
                </p>
                
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Projects