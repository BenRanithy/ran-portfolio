import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I have over 15 years of non-profit and hospitality experience before deciding to transition into web engineering where I just recently completed a full stack coding bootcamp via <a href="https://www.codingdojo.com/?utm_source=adwords&utm_campaign=nationwide_branding_softdev&utm_term=cd_ex&utm_content=539624643587&gclid=Cj0KCQiAyracBhDoARIsACGFcS6CnZ4ex7MldXlqyDLeoWuMUONG1Q8kGI4q6L7bX3ttcfAqkWdTg9QaAgqBEALw_wcB">Coding Dojo</a>. 
                </p>
                <p>
                    Before I got into coding, I went to a small art school (Marylhurst University) here in Portland, OR where I studied photography/filmmaking. My other hobbies include; animation, video games and I am an avid basketball and football fan.
                </p>
                <p>
                    Currently looking for an entry-level job with an established tech company where I can contribute and advance my skillset as a full stack web developer. (Portland, OR based and/or remote work) 
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

export default About 