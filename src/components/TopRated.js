import React, { useContext } from 'react';
import '../styles/Upcoming.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from '../CarouselSettings/CarouselSettings';
import { GetData } from '../contexts/GetDataContext';
import { SearchMovie } from '../contexts/SearchMovieContext';

const TopRated = () => {

    let movie;

    const { genres, topRated } = useContext(GetData);
    const { getClickedMovie } = useContext(SearchMovie);

    if (topRated.length !== 0 && genres.length !== 0) {

        movie = topRated.results.map(movie => {
            let index;
            index = genres.findIndex(item => item.id === movie.genre_ids[0])

            if (movie.poster_path) {
                return (
                    <div className='movie-item' key={movie.id}>
                        <p className="movie-genres">{genres[index].name}</p>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                        <p onClick={() => getClickedMovie(movie.id)} className='movie-title'>{movie.title}</p>
                    </div>
                )
            } else return null
        })
    }
    return (
        <div className="all">
            <h2 className="name">Top Rated</h2>
            <ul>
                <Slider  {...settings}>
                    {movie}
                </Slider>
            </ul>
        </div>
    );
}
export default TopRated;