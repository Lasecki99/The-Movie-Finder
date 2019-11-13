import React, { Component } from 'react';
import '../styles/App.css';
import Home from './Home'
import SeeDetails from './SeeDetails'
import Upcoming from './Upcoming'
import Popular from './Popular'
import TopRated from './TopRated'
import Spinner from './Spinner'
import MoviesWithTomHanks from './MoviesWithTomHanks'
import SearchList from './SearchList'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Form from './Form';
import Footer from './Footer'


class App extends Component {
   state = {
      searchMovies: [],
      homeMovies: [],
      genres: [],
      movieID: '',
      oneMovie: ['1'],
      upcomingMovies: [],
      popularMovies: [],
      topRated: [],
      moviesWithTomHanks: [],
   }

   componentWillMount() {
      this.getHomeMovies();
      this.getGenresList();
      this.getUpcomingMovies();
      this.getPopularMovies();
      this.getTopRatedMovies();
      this.getMoviesWithTomHanks();
   }

   getHomeMovies = () => {
      const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=30406056042449abcb3b86e3f1b631cd&language=en-US&page=1.json`;
      fetch(URL)
         .then(response => response.json())
         .then(data => {
            this.setState({
               homeMovies: data.results
            });
         });
   }

   getGenresList = () => {
      const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=30406056042449abcb3b86e3f1b631cd&language=en-US.json`;
      fetch(URL)
         .then(response => response.json())
         .then(data => {

            this.setState({
               genres: data
            });
         });
   }

   getMoviesWithTomHanks = () => {
      const URL = `https://api.themoviedb.org/3/person/31/combined_credits?api_key=30406056042449abcb3b86e3f1b631cd&language=en-US`;
      fetch(URL)
         .then(response => response.json())
         .then(data => {
            this.setState({
               moviesWithTomHanks: data.cast
            });
         });
   }

   getUpcomingMovies = () => {
      const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=30406056042449abcb3b86e3f1b631cd&language=en-US&page=1`;
      fetch(URL)
         .then(response => response.json())
         .then(data => {
            this.setState({
               upcomingMovies: data
            });
         });
   }

   getPopularMovies = () => {
      const URL = `https://api.themoviedb.org/3/movie/popular?api_key=30406056042449abcb3b86e3f1b631cd&language=en-US&page=1`;
      fetch(URL)
         .then(response => response.json())
         .then(data => {
            this.setState({
               popularMovies: data
            });
         });
   }

   getTopRatedMovies = () => {
      const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=30406056042449abcb3b86e3f1b631cd&language=en-US&page=1`;
      fetch(URL)
         .then(response => response.json())
         .then(data => {
            this.setState({
               topRated: data
            });
         });
   }

   handleGetID = (movieID) => {
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
            this.setState({
               oneMovie: details,
               movieID
            });
         });
   }

   handleCloseDetails = () => {
      //close details window
      document.querySelector('div.details').classList.remove('active');
   }

   handleCloseBackButton = () => {
      document.querySelector('i.fa-long-arrow-alt-left').style.display = 'none';
   }

   handleSearchMovies = (searchMovies) => {
      this.setState({
         searchMovies
      });
   }

   render() {
      const { homeMovies, genres, popularMovies, topRated, upcomingMovies, moviesWithTomHanks } = this.state;
      //returning content or spinner if not loaded yet
      const content = homeMovies.length !== 0 && genres.length !== 0 && popularMovies.length !== 0 && topRated.length !== 0 && upcomingMovies.length !== 0 && moviesWithTomHanks.length !== 0 ?
         <>
            <BrowserRouter>
               <nav>
                  <Link className='arrow' to='/' onClick={this.handleCloseBackButton}>
                     <i className="fas fa-long-arrow-alt-left"></i>
                  </Link>
                  <Form movies={this.handleSearchMovies} />
               </nav>
               <Switch>
                  <Route path='/search' render={(props) => {
                     return (
                        <>
                           <SeeDetails
                              movie={this.state.oneMovie}
                              close={this.handleCloseDetails}
                           />
                           <SearchList
                              movies={this.state.searchMovies}
                              genres={this.state.genres}
                              id={this.handleGetID}
                           />
                        </>
                     );
                  }} />
                  <Route path='/' render={(props) => {
                     return (
                        <>
                           <Home
                              movies={this.state.homeMovies}
                              id={this.handleGetID} />
                           <SeeDetails
                              movie={this.state.oneMovie}
                              close={this.handleCloseDetails} />
                           <Upcoming
                              movies={this.state.upcomingMovies}
                              genres={this.state.genres}
                              id={this.handleGetID} />
                           <Popular
                              movies={this.state.popularMovies}
                              genres={this.state.genres}
                              id={this.handleGetID} />
                           <TopRated
                              movies={this.state.topRated}
                              genres={this.state.genres}
                              id={this.handleGetID} />
                           <MoviesWithTomHanks
                              movies={this.state.moviesWithTomHanks}
                              genres={this.state.genres}
                              id={this.handleGetID} />
                           <Footer />
                        </>
                     )
                  }} />
               </Switch>
            </BrowserRouter>
         </> : <Spinner />;
      return (
         <>
            {content}
         </>
      )
   }
}

export default App;
