import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormContext } from '../contexts/FormContext';

const Form = () => {

    const { inputValue, setInputValue, handleSearch, preventRefresh } = useContext(FormContext);

    return (
        <>
            <form onSubmit={preventRefresh}>
                <input onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder='Search' type="text" />
                <Link to='/search'><i onClick={handleSearch} className={inputValue ? 'fas fa-search active' : 'fas fa-search'}></i></Link>
            </form>
        </>
    );
}

export default Form;