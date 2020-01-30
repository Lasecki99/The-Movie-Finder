import React, { useContext } from 'react';
import '../styles/SeeDetails.css'
import reactImage from '../img/react.png'
import { SearchMovie } from '../contexts/SearchMovieContext';

const seeDetails = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { oneMovie, handleCloseDetails } = useContext(SearchMovie);

    let genresInfo;

    if (oneMovie.genres) {
        if (oneMovie.genres[0]) genresInfo = oneMovie.genres[0].name;
        if (oneMovie.genres[1]) genresInfo = oneMovie.genres[0].name + `, ` + oneMovie.genres[1].name;
        if (oneMovie.genres[2]) genresInfo = oneMovie.genres[0].name + `, ` + oneMovie.genres[1].name;
    }

    let details = oneMovie.length !== 0 ? <div style={oneMovie.backdrop ? {
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${oneMovie.backdrop})`
    } : {
            backgroundImage: reactImage
        }} className='details'>

        <div className="black-background">
            <i onClick={handleCloseDetails} className="fas fa-long-arrow-alt-left"></i>
            <h1>{oneMovie.title}</h1>
            <h2>{oneMovie.overview}</h2>
            <div className="other-info">
                <p>Release Date: {oneMovie.release_date ? oneMovie.release_date : `No data avaiable`}</p>
                <p>Production: {oneMovie.production ? oneMovie.production : `No data avaiable`}</p>
                <p>Runtime: {oneMovie.runtime ? oneMovie.runtime + ' minutes' : `No data avaiable`}</p>
                <p>Average rating: {oneMovie.rating ? oneMovie.rating : `No data avaiable`}</p>
                <p>Budget: {oneMovie.budget ? oneMovie.budget + ' $' : `No data avaiable`} </p>
                <p>Revenue: {oneMovie.revenue ? oneMovie.revenue : `No data avaiable`}</p>
                <p>Genres: {genresInfo ? genresInfo : 'No data avaiable'}</p>
            </div>
        </div>
    </div> : null

    return (
        <>
            {details}
        </>
    );
}

export default seeDetails;