import React from 'react'
import '../css/frontly.css';
import video from '../Videos/frontvideo.mp4';

const Frontly = () => {
    return (
        <div className="frontly">
            
            <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
            <h1>May your dreams <br /> bloom into 
            <button class="btn"><a href='/'>Explore us</a></button>  
            <br /> sweet moments
            </h1>
            

      </div>
    );
}
    
export default Frontly;
