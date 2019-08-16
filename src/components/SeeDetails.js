import React from 'react';
import '../styles/SeeDetails.css'
import reactImage from '../img/react.png'

const seeDetails = (props) => {


    const { title, overview, release_date, production, rating, genres, revenue, budget, runtime, backdrop } = props.movie

    let genresInfo;

    if (genres) {
        if (genres[0]) {
            genresInfo = genres[0].name
        }
        if (genres[1]) {
            genresInfo = genres[0].name + `, ` + genres[1].name
        }
        if (genres[2]) {
            genresInfo = genres[0].name + `, ` + genres[1].name + `, ` + genres[2].name
        }
    }

    let details = props.movie.length !== 0 ? <div style={backdrop ? {
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop})`
    } : {
            backgroundImage: reactImage
        }} className='details'>

        <div className="black-background">

            <i onClick={props.close} className="fas fa-long-arrow-alt-left"></i>
            <h1>{title}</h1>
            <h2>{overview}</h2>
            <div className="other-info">
                <p>Release Date: {release_date ? release_date : `No data avaiable`}</p>
                <p>Production: {production ? production : `No data avaiable`}</p>
                <p>Runtime: {runtime ? runtime + ' minutes' : `No data avaiable`}</p>
                <p>Average rating: {rating ? rating : `No data avaiable`}</p>
                <p>Budget: {budget ? budget + ' $' : `No data avaiable`} </p>
                <p>Revenue: {revenue ? revenue : `No data avaiable`}</p>
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