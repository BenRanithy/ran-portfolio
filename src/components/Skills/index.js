import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const Skills = () => {
    return (
        <>
        <div className='container skills-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['T', 'e', 'c', 'h', 'n', 'i', 'c', 'a', 'l', ' ', 'S', 'k', 'i', 'l', 'l', 's']}
                        idx={25}
                    />
                </h1>
                <p>
                    Languages: <span className='multicolor'>HTML, CSS, Javascript, Python, Java</span>
                </p>
                <p>
                    Framework/Libraries: <span className='multicolor' >Flask, Spring Boot, NodeJS, ReactJS, ExpressJS, API</span>
                </p>
                <p>
                    Deployment: <span className='multicolor' >AWS, GitHub</span>
                </p>
                <p>
                    Databases: <span className='multicolor' >MySQL, NoSQL, MongoDB, Mongoose</span>
                </p>
                <p>
                    Digital Video Editing: <span className='multicolor' >Final Cut Pro, Adobe Premiere</span>
                </p>
                <p>
                    Misc: <span className='multicolor' >Bootstrap, GitHub, Balsamiq, Postman, GitBash</span>
                </p>
                <p>
                    Feel free to visit my <a href="https://www.linkedin.com/in/ranithy-ben/">LinkedIn </a> profile
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Skills