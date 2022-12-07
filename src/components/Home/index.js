import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import './index.scss'
import Photo from './Photo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = ['I', ' ', 'a', 'm', ' ', 'R', 'a', 'n', 'i', 't', 'h', 'y', ' ',  'B', 'e', 'n']
    const jobArray = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'm', 'y', ' ', 'p', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o', '!']

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hi, <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>| Full Stack Developer | Front End | Back End | Database | </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Photo />
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home