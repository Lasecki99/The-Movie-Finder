import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    return (

        <footer>

            <div className="logo">
                <img src="https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg" alt="" />
            </div>

            <p className="credits">
                This product uses the TMDb API but is not endorsed or certified by TMDb.
            </p>
        </footer>
    );
}

export default Footer;