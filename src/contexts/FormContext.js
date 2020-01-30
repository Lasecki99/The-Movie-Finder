import React, { createContext, useState } from 'react';

export const FormContext = createContext();

const FormContextProvider = (props) => {

    const [inputValue, setInputValue] = useState('');
    const [searchMovies, setSearchMovies] = useState([]);

    const handleSearch = () => {
        if (inputValue !== '') {
            document.querySelector('i.fa-long-arrow-alt-left').style.display = 'block';
            const URL = `https://api.themoviedb.org/3/search/movie?api_key=30406056042449abcb3b86e3f1b631cd&language=en-US&query=${inputValue}&page=1&include_adult=false`;

            fetch(URL)
                .then(res => res.json())
                .then(data => {
                    setSearchMovies(data);
                });
        } else {
            window.location.href = '';
            alert('Type something !');
        };
    }

    const preventRefresh = e => {
        e.preventDefault();
    }

    return (
        <FormContext.Provider value={{ inputValue, setInputValue, handleSearch, searchMovies, preventRefresh }}>
            {props.children}
        </FormContext.Provider>
    );
}

export default FormContextProvider;