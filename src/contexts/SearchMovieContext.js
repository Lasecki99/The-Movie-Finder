import React, { createContext, useState } from 'react';

export const SearchMovie = createContext();


const SearchMovieProvider = (props) => {

    const [oneMovie, setOneMovie] = useState(['1']);


    const getClickedMovie = movieID => {
        //open details window
        document.querySelector('div.details').classList.add('active');
        const URL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=30406056042449abcb3b86e3f1b631cd&language=en-US`;
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                const details = {
                    release_date: data.release_date,
                    production: data.production_companies[0] === undefined ? null : data.production_companies[0].name,
                    runtime: data.runtime,
                    rating: data.vote_average,
                    budget: data.budget,
                    revenue: data.revenue,
                    genres: data.genres,
                    title: data.title,
                    overview: data.overview,
                    backdrop: data.backdrop_path,
                };
                setOneMovie(details);
            });
    }

    const handleCloseDetails = () => {
        //close details window
        document.querySelector('div.details').classList.remove('active');
    }

    return (
        <SearchMovie.Provider value={{ getClickedMovie, oneMovie, handleCloseDetails }}>
            {props.children}
        </SearchMovie.Provider>
    );
}

export default SearchMovieProvider;