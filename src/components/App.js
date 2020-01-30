import React, { Component } from 'react';
import '../styles/App.css';
import Home from './Home'
import SeeDetails from './SeeDetails'
import Upcoming from './Upcoming'
import Popular from './Popular'
import TopRated from './TopRated'
import MoviesWithTomHanks from './MoviesWithTomHanks'
import SearchList from './SearchList'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Form from './Form';
import Footer from './Footer';
import GetDataProvider from '../contexts/GetDataContext';
import SearchMovieProvider from '../contexts/SearchMovieContext';
import FormContextProvider from '../contexts/FormContext';

class App extends Component {
   state = {
      searchMovies: [],
      oneMovie: ['1'],
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
            });
         });
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
      return (
         <>
            <GetDataProvider>
               <SearchMovieProvider>
                  <FormContextProvider>
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
                                    <SeeDetails />
                                    <SearchList
                                       movies={this.state.searchMovies}
                                       id={this.handleGetID}
                                    />
                                 </>
                              );
                           }} />
                           <Route path='/' render={() => {
                              return (
                                 <>
                                    <Home />
                                    <SeeDetails />
                                    <Upcoming />
                                    <Popular />
                                    <TopRated />
                                    <MoviesWithTomHanks />
                                    <Footer />
                                 </>
                              )
                           }} />
                        </Switch>
                     </BrowserRouter>
                  </FormContextProvider>
               </SearchMovieProvider>
            </GetDataProvider>
         </>
      )
   }
}

export default App;
