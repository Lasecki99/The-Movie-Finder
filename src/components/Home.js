import React, { useContext } from 'react';
import '../styles/Home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { GetData } from '../contexts/GetDataContext';
import Spinner from './Spinner';
import { SearchMovie } from '../contexts/SearchMovieContext';

const Home = () => {

    const { homeMovies, isInited } = useContext(GetData);
    const { getClickedMovie } = useContext(SearchMovie);

    const movie = homeMovies?.map(item => {
        if (item.backdrop_path) {
            const { backdrop_path, title, id } = item;
            return (
                <div key={id}>
                    <img src={`https://image.tmdb.org/t/p/original/` + backdrop_path} alt={title} />
                    <h4>{title}</h4>
                    <h5 onClick={() => getClickedMovie(id)}>See details</h5>
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