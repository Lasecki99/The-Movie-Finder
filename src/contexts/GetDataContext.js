import React, { createContext, useState, useEffect } from 'react';
import { dataUrl } from '../fetchUrls/fetchUrls';

export const GetData = createContext();

const GetDataProvider = (props) => {
   const [homeMovies, setHomeMovies] = useState([]);
   const [genres, setGenres] = useState([]);
   const [upcomingMovies, setUpcomingMovies] = useState([]);
   const [popularMovies, setPopularMovies] = useState([]);
   const [topRated, setTopRated] = useState([]);
   const [moviesWithTomHanks, setMoviesWithTomHanks] = useState([]);
   const [isInited, setIsInited] = useState(false);

   useEffect(() => {
      if (!isInited) {
         console.log('wchodze');
         dataUrl.map(item => {
            const { URL, name } = item;
            fetch(URL)
               .then(res => res.json())
               .then(data => {
                  switch (name) {
                     case 'moviesWithTomHanks':
                        setMoviesWithTomHanks(data.cast);
                        break;
                     case 'upcomingMovies':
                        setUpcomingMovies(data);
                        break;
                     case 'popularMovies':
                        setPopularMovies(data);
                        break;
                     case 'topRatedMovies':
                        setTopRated(data);
                        break;
                     case 'homeMovies':
                        setHomeMovies(data.results);
                        break;
                     case 'genresList':
                        setGenres(data);
                        break;
                     default:
                        break;
                  }
               })
         })
      }
   }, [isInited])

   if (moviesWithTomHanks.length !== 0 && upcomingMovies.length !== 0 && popularMovies.length !== 0 && topRated.length !== 0 && homeMovies.length !== 0 && genres.length !== 0) {
      if (!isInited) setIsInited(true);
   }

   return (
      <GetData.Provider value={{ homeMovies, genres, popularMovies, topRated, upcomingMovies, moviesWithTomHanks, isInited }}>
         {props.children};
        </GetData.Provider>
   );
}

export default GetDataProvider;