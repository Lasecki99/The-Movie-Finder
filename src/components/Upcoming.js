import React from 'react';
import '../styles/Upcoming.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Upcoming = (props) => {

    let movie;
    const settings = {
        dots: false,
        slidesToShow: 5,
        speed: 400,
        slidesToScroll: 2,

        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    if (props.movies.length !== 0 && props.genres.length !== 0) {
        movie = props.movies.results.map(movie => {
            let index;
            index = props.genres.genres.findIndex(item => item.id === movie.genre_ids[0])
            if (movie.poster_path) {
                return (
                    <div className='movie-item' key={movie.id}>
                        <p className="movie-genres">{props.genres.genres[index].name}</p>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                        <p onClick={() => props.id(movie.id)} className='movie-title'>{movie.title}</p>
                    </div>
                )
            } else return null
        })
    }
    return (
        <div className="all">
            <h2 className="name">Upcoming</h2>
            <ul>
                <Slider  {...settings}>
                    {movie}
                </Slider>
            </ul>
        </div>
    );
}
export default Upcoming;