
import './Card-success.css';
import imageSucces from '../assets/images/tildeVerde.svg';

export const CardSuccess = ({ successVisible }) => {
    return (
        <div className={`success ${successVisible ? 'visible' : ''}`}>
            <section className='sended'>
                <img className='image-ok' src={imageSucces} alt="" />
                <p className='sended-message'>Message Sent!</p>
            </section>
            <p className='gratitude'>  Thanks for completing the form. We'll be in touch soon!</p>
        </div>
    )
}