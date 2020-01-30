import React, { useContext } from 'react';
import '../styles/Home.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { GetData } from '../contexts/GetDataContext';
import Spinner from './Spinner';
import { SearchMovie } from '../contexts/SearchMovieContext';

const Home = () => {

    const { homeMovies, isInited } = useContext(GetData);
    const { getClickedMovie } = useContext(SearchMovie);

    const movie = homeMovies.map(item => {
        if (item.backdrop_path) {
            return (
                <div key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/original/` + item.backdrop_path} alt={item.title} />
                    <h4>{item.title}</h4>
                    <h5 onClick={() => getClickedMovie(item.id)}>See details</h5>
                </div>
            )
        } else return null;
    });
    return (
        <>
            {isInited ? (
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
            ) : <Spinner />}
        </>
    );
}

export default Home;