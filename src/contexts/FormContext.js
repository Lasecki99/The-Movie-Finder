import React, { createContext, useState } from 'react';

export const FormContext = createContext();

const FormContextProvider = (props) => {

    const [inputValue, setInputValue] = useState('');

    return (
        <FormContext.Provider>
            {props.children}
        </FormContext.Provider>
    );
}

export default FormContextProvider;