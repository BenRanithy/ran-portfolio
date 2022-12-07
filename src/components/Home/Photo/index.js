import './index.scss';
import HeadShot from '../../../assets/images/head shot.jpg'

const Photo = () => {
    return (
        <div className="photo-container">
            <img className="photo" src={HeadShot} alt='ran' />
        </div>
    )
}

export default Photo