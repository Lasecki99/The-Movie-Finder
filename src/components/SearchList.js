import React from 'react';
import '../styles/SearchList.css'


const SearchList = (props) => {

    const result = props.movies.length !== 0 ? props.movies.results.map(movie => {
        let index = props.genres.genres.findIndex(item => item.id === movie.genre_ids[0])
        if (index === -1) index = 0;
        if (movie.poster_path) {
            return (
                <div className='movie-item search' key={movie.id}>
                    <p className="movie-genres search">{props.genres.genres[index].name}</p>
                    <img onClick={() => props.id(movie.id)} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                    <p onClick={() => props.id(movie.id)} className='movie-title search'>{movie.title}</p>
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