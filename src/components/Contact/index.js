import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const refForm = useRef()
    
    const sendEmail = (e) => {
        e.preventDefault ()

        emailjs
            .sendForm('service_438czwd', 'template_3v6nogj', refForm.current,'u6wBso7Yal9ZjgyMQ')
            .then (
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15} 
                        />
                    </h1>
                    <p>
                        Feel free to contact me with any questions or inquiries. 
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required ></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Ranithy Ben
                    <br />
                    Beaverton, OR 97007
                    <br />
                    USA
                    <br />
                    <span>mr.rk.ben@gmail.com</span>
                </div>
                <div className='map-wrap'>
                <MapContainer center={[45.4869, -122.8040]} zoom={10}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[45.4869, -122.8040]}>
                            <Popup>Ranithy lives here, say hi if you are in the area!</Popup>
                        </Marker>
                </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact