import React from 'react';
import '../styles/App.css';
import Home from './Home';
import SeeDetails from './SeeDetails';
import Upcoming from './Upcoming';
import Popular from './Popular';
import TopRated from './TopRated';
import MoviesWithTomHanks from './MoviesWithTomHanks';
import SearchList from './SearchList';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Form from './Form';
import Footer from './Footer';
import GetDataProvider from '../contexts/GetDataContext';
import SearchMovieProvider from '../contexts/SearchMovieContext';
import FormContextProvider from '../contexts/FormContext';

const App = () => {

   const handleCloseBackButton = () => {
      document.querySelector('i.fa-long-arrow-alt-left').style.display = 'none';
   }

   return (
      <>
         <GetDataProvider>
            <SearchMovieProvider>
               <FormContextProvider>
                  <BrowserRouter>
                     <nav>
                        <Link className='arrow' to='/' onClick={handleCloseBackButton}>
                           <i className="fas fa-long-arrow-alt-left"></i>
                        </Link>
                        <Form />
                     </nav>
                     <Switch>
                        <Route path='/search' render={() => {
                           return (
                              <>
                                 <SeeDetails />
                                 <SearchList />
                              </>
                           )
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

export default App;
