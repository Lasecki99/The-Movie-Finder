import React from 'react';
import '../styles/Home.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Home = (props) => {

    const movie = props.movies.map(item => {
        if (item.backdrop_path) {
            return (
                <div key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/original/` + item.backdrop_path} alt={item.title} />
                    <h4>{item.title}</h4>
                    <h5 onClick={() => props.id(item.id)}>See details</h5>
                </div>
            )
        } else return null;
    });
    return (
        <div className='movie'>
            <ul className="list">
                <Carousel
                    showIndicators={false}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}>{movie}
                </Carousel>
            </ul>
        </div >
    );
}

export default Home;