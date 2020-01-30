import React, { useContext } from 'react';
import '../styles/SearchList.css'
import { GetData } from '../contexts/GetDataContext';
import { FormContext } from '../contexts/FormContext';
import { SearchMovie } from '../contexts/SearchMovieContext';


const SearchList = () => {

    const { searchMovies } = useContext(FormContext);
    const { getClickedMovie } = useContext(SearchMovie);

    const { genres } = useContext(GetData);

    const result = searchMovies.length !== 0 ? searchMovies.results.map(movie => {
        let index = genres.findIndex(item => item.id === movie.genre_ids[0])
        if (index === -1) index = 0;
        if (movie.poster_path) {
            return (
                <div className='movie-item search' key={movie.id}>
                    <p className="movie-genres search">{genres[index].name}</p>
                    <img onClick={() => getClickedMovie(movie.id)} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                    <p onClick={() => getClickedMovie(movie.id)} className='movie-title search'>{movie.title}</p>
                </div>
            )
        } else return null
    }
    ) : null;

    return (
        <div className="search-list">
            {result}
        </div>
    );
}

export default SearchList;