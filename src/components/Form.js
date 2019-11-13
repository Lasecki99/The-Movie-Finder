import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Form extends Component {
    state = {
        inputValue: '',
        searchMovies: [],
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.searchMovies !== prevState.searchMovies) {
            this.props.movies(this.state.searchMovies);
        }
    }

    handleInput = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    }

    handleSearch = () => {
        if (this.state.inputValue !== '') {
            document.querySelector('i.fa-long-arrow-alt-left').style.display = 'block';
            const URL = `https://api.themoviedb.org/3/search/movie?api_key=30406056042449abcb3b86e3f1b631cd&language=en-US&query=${this.state.inputValue}&page=1&include_adult=false`;

            fetch(URL)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        searchMovies: data
                    });
                });
        } else alert('Type something !');
    }

    handleNoRefresh = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleNoRefresh} >
                    <input onChange={this.handleInput} value={this.state.inputValue} placeholder='Search' type="text" />
                    <Link to='/search'   ><i onClick={this.handleSearch} className="fas fa-search"></i></Link>
                </form>
            </>

        );
    }
}

export default Form;