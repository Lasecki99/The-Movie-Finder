export const dataUrl = [
    {URL: `https://api.themoviedb.org/3/person/31/combined_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`, name: 'moviesWithTomHanks'},
    {URL: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`, name: 'upcomingMovies'},
    {URL: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`, name: 'popularMovies'},
    {URL: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`, name: 'topRatedMovies'},
    {URL: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1.json`, name: 'homeMovies'},
    {URL: `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US.json`, name: 'genresList'}
]