import React, { useContext } from 'react';
import '../styles/Upcoming.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from '../CarouselSettings/CarouselSettings';
import { GetData } from '../contexts/GetDataContext';
import { SearchMovie } from '../contexts/SearchMovieContext';

const MoviesWithTomHanks = () => {

    let movie;

    const { genres, moviesWithTomHanks } = useContext(GetData);
    const { getClickedMovie } = useContext(SearchMovie);

    if (moviesWithTomHanks.length !== 0 && genres.length !== 0) {
        movie = moviesWithTomHanks.map(movie => {
            let index = genres.findIndex(item => item.id === movie.genre_ids[0])
            if (index === -1) index = 0;
            if (movie.poster_path && movie.title) {
                return (
                    <div className='movie-item' key={movie.id}>
                        <p className="movie-genres">{genres[index].name}</p>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                        <p onClick={() => getClickedMovie(movie.id)} className='movie-title'>{movie.title}</p>
                    </div>
                )
            } else return null;
        })
    }

    return (
        <div className="all">
            <h2 className="name hanks">Movies with Tom Hanks</h2>
            <ul>
                <Slider  {...settings}>
                    {movie}
                </Slider>
            </ul>
        </div>
    );
}
export default MoviesWithTomHanks;