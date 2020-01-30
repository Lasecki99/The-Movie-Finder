import React, { createContext } from 'react';
import { dataUrl } from '../fetchUrls/fetchUrls';

export const GetData = createContext();

const GetDataProvider = (props) => {

    console.log(dataUrl);

    return ( 
        <GetData.Provider>
            {props.children};
        </GetData.Provider>
     );
}
 
export default GetDataProvider;