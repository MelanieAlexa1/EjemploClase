import React from 'react'
import PropTypes from 'prop-types';

export default function Card({id, title, image, consola}) {
    return(
        <div className='card text-centre bg-dark'>
            <div className='card-body text-light'>
                <img srs={image} alt="" className='card-img.top' />
                <h4 className='card-title'>{title}</h4>
                <p>
                    Consola:{consola}
                </p>
                <a href='#!' className='btn btn-outline-secondary rounded-3'> 
                    Ir al sitio web
                </a>
            </div> 
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    consola: PropTypes.string.isRequired,
};
